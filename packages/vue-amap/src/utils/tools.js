// 防止多次加载
const pMap = {};

// 动态创建scripts
export function createScript(src) {
  if (!src) return;
  if (pMap[src]) return pMap[src];
  pMap[src] = new Promise((resolve, reject) => {
    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    head.appendChild(script);
    script.onload = resolve;
    script.onerror = e => {
      delete pMap[src];
      reject(e);
    };
  });
  return pMap[src];
}
