import uploader from "kuan-utils/lib/uploader";
import { toast } from "@halobear/vue-feedback";

/**
 * @description: 上传单个文件
 * @param {File} file 文件对象
 * @param {String} name 文件md5
 * @param {Object} formData 上传额外参数
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
async function upload({
  file,
  name,
  formData = {},
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
 * @param {Number} size 文件大小限制20M
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
export default async ({
  formData = {},
  size = 20,
  needMD5 = true,
  fetchToken = () => {},
  onProgress
} = {}) => {
  // 获取文件列表
  const fileList = await uploader.getFiles({ multiple: true, needMD5 });
  // 获取token
  formData.token = await fetchToken();
  // 限制文件大小
  const filterList = fileList.filter(({ file }) => file.size / 1000000 <= size);
  if (filterList.length !== fileList.length) {
    const info = `${fileList.length - filterList.length}个文件大小超出${size}M`;
    toast(info);
  }

  // 开始上传
  const resList = await Promise.all(
    filterList.map(fileData => {
      const { name, file } = fileData;
      return upload({ name, file, formData, onProgress, size, needMD5 });
    })
  );
  return resList;
};
