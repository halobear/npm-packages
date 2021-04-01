import Shape from './shape.vue'

Shape.install = (app) => {
  app.component('vue-shape', Shape)
}

export default Shape
