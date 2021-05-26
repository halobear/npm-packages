import { onMounted, unref, ref, onBeforeMount, computed, watch } from 'vue'
import Sortable from 'sortablejs'

export default (props, changeValue) => {
  const container = ref()

  const disabled = computed(() => props.accept !== 'image/*')

  let _sortable

  onMounted(() => {
    _sortable = new Sortable(unref(container), {
      handle: '.image-card,.file-card',
      filter: '.upload-card',
      disabled: disabled.value,
      onMove(e) {
        return !e.related.className.includes('upload-card')
      },
      onUpdate(e) {
        props.value.splice(e.newIndex, 0, props.value.splice(e.oldIndex, 1)[0])
        changeValue(props.value.filter(Boolean))
      },
    })
  })

  watch(disabled, () => {
    _sortable && _sortable.option('disabled', disabled.value)
  })

  onBeforeMount(() => {
    _sortable && _sortable.destory()
  })

  return {
    container,
  }
}
