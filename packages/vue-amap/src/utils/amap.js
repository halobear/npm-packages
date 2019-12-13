import { createScript } from "./tools";
import { amapKey, BEIJING } from "./constant";

async function init(
  { el, input, center = BEIJING, city, disabled = false },
  callback
) {
  // 没有引入地图sdk则初始化地图
  if (!window.AMap) {
    const src = `//webapi.amap.com/maps?v=1.4.6&key=${amapKey}`;
    await createScript(src);
  }
  // 初始化地图
  const map = new window.AMap.Map(el, {
    zoom: 12,
    center
  });

  // 添加地图marker
  const marker = addMarker({ lng: center[0], lat: center[1], map }, callback);

  if (!disabled) {
    window.AMap.plugin("AMap.Autocomplete", () => {
      // 实例化Autocomplete
      const autoOptions = {
        city: city || "全国",
        input
      };
      new AMap.Autocomplete(autoOptions);
    });

    AMap.event.addListener(map, "click", ({ lnglat: e }) => {
      callback([e.lng, e.lat], "click");
    });
  }
  return {
    map,
    marker
  };
}

function addMarker({ lng, lat, map }, callback) {
  const marker = new AMap.Marker({
    position: [lng, lat], // marker所在的位置
    map, // 创建时直接赋予map属性
    draggable: !!callback, //是否可拖动
    icon: new AMap.Icon({
      image: "http://webapi.amap.com/images/0.png",
      size: new AMap.Size(36, 36),
      imageOffset: new AMap.Pixel(-0, -0)
    })
  });
  if (typeof callback === "function") {
    marker.on("dragend", ({ lnglat: e }) => {
      callback([e.lng, e.lat], "dragend");
    });
  }
  return marker;
}

// 搜索
function search(keyword, city) {
  if (!keyword) return null;
  const searchOptions = {
    pageSize: 5,
    pageIndex: 1,
    city
  };
  if (!window.AMap) return null;
  return new Promise((resolve, reject) => {
    AMap.service("AMap.PlaceSearch", () => {
      const placeSearch = new AMap.PlaceSearch(searchOptions);
      placeSearch.search(keyword, (status, result) => {
        // 搜索到结果
        if (result.info !== "OK") {
          return reject(result);
        }
        // 结果列表
        const {
          poiList: { pois = [] }
        } = result;
        resolve(pois[0]);
      });
    });
  });
}

export default {
  init,
  addMarker,
  search
};
