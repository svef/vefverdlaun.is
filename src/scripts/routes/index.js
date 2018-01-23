
import homeRoute from './home'
import domnefndRoute from './domnefnd'
import flokkarRoute from './flokkar'
import tilnefningarRoute from './tilnefningar'
import vidurkenningarRoute from './vidurkenningar'
import verdlaunaafhendingRoute from './verdlaunaafhending'

export default {
  [homeRoute.path]: homeRoute,
  [`${homeRoute.path}index.html`]: homeRoute,
  [domnefndRoute.path]: domnefndRoute,
  [flokkarRoute.path]: flokkarRoute,
  [tilnefningarRoute.path]: tilnefningarRoute,
  [vidurkenningarRoute.path]: vidurkenningarRoute,
  [verdlaunaafhendingRoute.path]: verdlaunaafhendingRoute,
}
