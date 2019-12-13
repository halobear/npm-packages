import uploader from "kuan-utils/lib/uploader";
import { toast } from "@halobear/vue-feedback";

/**
 * @description: 上传单个文件
 * @param {File} file 文件对象
 * @param {String} name 文件md5
 * @param {Object} formData 上传额外参数
 * @param {Number} size 文件大小限制20000K
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
async function upload({
  file,
  name,
  formData = {},
  size = 380,
  needMD5 = true,
  onProgress
}) {
  if (name && needMD5) {
    formData.key = name;
  }

  const fd = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    fd.append(key, value);
  });
  fd.append("file", file);
  if (size && file.size / 1000 > size) {
    const info = `文件大小限制${size}K`;
    toast(info);
    return Promise.reject(info);
  }
  const data = await uploader.upload({
    url: "https://upload.qiniup.com",
    data: fd,
    onProgress
  });
  return {
    ...data,
    url: `${data.base_url}${data.path}-300x300`
  };
}

/**
 * @description: 上传单个文件
 * @param {Object} formData 上传额外参数
 * @param {Number} size 文件大小限制20000K
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
export default async ({
  formData = {},
  size = 380,
  needMD5 = true,
  fetchToken = () => {},
  onProgress
} = {}) => {
  // 获取文件列表
  const fileList = await uploader.getFiles({ multiple: true, needMD5 });
  // 获取token
  formData.token = await fetchToken();
  // 开始上传
  const resList = await Promise.all(
    fileList.map(fileData => {
      const { name, file } = fileData;
      return upload({ name, file, formData, onProgress, size, needMD5 });
    })
  );
  return resList;
};
