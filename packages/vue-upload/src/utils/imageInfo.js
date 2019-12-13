export default file => {
  if (!file) return { width: 0, height: 0 }; // 没有选择图片，直接return
  if (!/^image\/[jpeg|png|jpg|gif|svg|ico]/gi.test(file.type)) {
    alert("请上传图片类型文件");
    return { width: 0, height: 0 };
  }
  return new Promise(resolve => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function() {
      resolve({
        width: this.width,
        height: this.height
      });
    };
    img.onerror = function() {
      resolve({
        width: 0,
        height: 0
      });
    };
  });
};
