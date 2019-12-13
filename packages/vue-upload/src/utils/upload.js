import uploader from "kuan-utils/lib/uploader";
import { toast } from "@halobear/vue-feedback";
import validate from "./validateImageSize";

/**
 * @description: 上传单个文件
 * @param {String} action 文件上传地址
 * @param {File} file 文件对象
 * @param {String} name 文件md5
 * @param {Object} formData 上传额外参数
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
async function upload({
  action = "https://upload.qiniup.com",
  name,
  file,
  formData = {},
  onProgress,
  needMD5 = true
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
    url: action,
    data: fd,
    onProgress
  });
  return {
    ...data,
    url: `${data.base_url}${data.path}-300x300`
  };
}

/**
 * @description: 上传多个文件
 * @param {String} action 文件上传地址
 * @param {Object} formData 上传额外参数
 * @param {Number} size 文件大小限制20M
 * @param {Number} width 限制文件宽度
 * @param {Number} height 限制文件高度
 * @param {Function} fetchToken 返回token promise
 * @param {Function} onProgress 上传进度
 * @return: Promise
 */
export default async ({
  action,
  formData = {},
  size = 20,
  limit = 1,
  width,
  height,
  needMD5 = true,
  fetchToken = () => {},
  onProgress
} = {}) => {
  // 获取文件列表
  const fileList = await uploader.getFiles({ multiple: limit > 1, needMD5 });
  // 获取token
  formData.token = await fetchToken();
  // 限制文件大小
  let filterList = fileList.filter(
    ({ file }) => file.size / 1024 / 1024 <= size
  );
  if (filterList.length !== fileList.length) {
    const info = `${fileList.length - filterList.length}个文件大小超出${size}M`;
    toast(info);
  }
  // 限制图片大小
  if (width || height) {
    const oldList = filterList;
    filterList = await Promise.all(
      oldList.map(async fileData => {
        const res = await validate({ file: fileData.file, width, height });
        return res ? fileData : undefined;
      })
    );
    filterList = filterList.filter(item => item);
    if (oldList.length !== filterList.length) {
      toast(`尺寸限制：宽 ${width}, 高 ${height}`);
    }
  }
  // 开始上传
  const resList = await Promise.all(
    filterList.slice(0, limit).map(fileData => {
      const { name, file } = fileData;
      return upload({
        action,
        name,
        file,
        formData,
        onProgress,
        needMD5
      });
    })
  );
  return resList;
};
