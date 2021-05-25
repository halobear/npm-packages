import { onMounted, unref, ref, onBeforeMount } from 'vue'
import Sortable from 'sortablejs'

export default (props, changeValue) => {
  const container = ref()

  let _sortable

  onMounted(() => {
    _sortable = new Sortable(unref(container), {
      handle: '.image-card,.file-card',
      filter: '.upload-card',
      onMove(e) {
        return !e.related.className.includes('upload-card')
      },
      onUpdate(e) {
        props.value.splice(e.newIndex, 0, props.value.splice(e.oldIndex, 1)[0])
        changeValue(props.value.filter(Boolean))
      },
    })
  })

  onBeforeMount(() => {
    _sortable && _sortable.destory()
  })

  return {
    container,
  }
}
