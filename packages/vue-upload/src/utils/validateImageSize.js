export default ({ file, width, height }) => {
  if (!width && !height) return true; // 没有设置宽高， 直接通过
  if (!file) return false; // 没有选择图片，不通过
  if (!/^image\/[jpeg|png|jpg|gif|svg|ico]/gi.test(file.type)) return true;
  return new Promise(resolve => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function() {
      if (width && width < this.width) return resolve(false);
      if (height && height < this.height) return resolve(false);
      resolve(true);
    };
    img.onerror = function() {
      resolve(false);
    };
  });
};
