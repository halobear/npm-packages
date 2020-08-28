import deepClone from 'lodash.clonedeep'

function groupRegion(region) {
  const groupMap = {}
  region.forEach((item) => {
    const { pid } = item
    if (!groupMap[pid]) groupMap[pid] = []
    groupMap[pid].push(item)
  })
  return groupMap
}

function setChildren(list, groupMap, simple) {
  list.forEach((item) => {
    const children = groupMap[item.id] || []
    if (item.id && children.length) {
      item.children = children
      groupMap[item.id] = []
      !simple && setChildren(item.children, groupMap)
    }
  })
}

export default (region = [], simple) => {
  const list = deepClone(region)
  const groupMap = groupRegion(list)
  const provinces = groupMap[0] || []
  setChildren(provinces, groupMap, simple)
  return provinces
}
