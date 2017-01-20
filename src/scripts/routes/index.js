
import homeRoute from './home'
import domnefndRoute from './domnefnd'
import flokkarRoute from './flokkar'
import tilnefningarRoute from './tilnefningar'

export default {
  [homeRoute.path]: homeRoute,
  [`${homeRoute.path}index.html`]: homeRoute,
  [domnefndRoute.path]: domnefndRoute,
  [flokkarRoute.path]: flokkarRoute,
  [tilnefningarRoute.path]: tilnefningarRoute,
}
