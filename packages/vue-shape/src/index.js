import Shape from './Shape.vue'

export default {
  functional: true,
  props: {
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  render(h, context) {
    const { props = {}, children = [] } = context
    const { disabled } = props
    return disabled ? children : h(Shape, children)
  },
}
