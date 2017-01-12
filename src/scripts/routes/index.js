
import homeRoute from './home'
import speakersRoute from './speakers'
import workshopRoute from './workshop'
import scheduleRoute from './schedule'
import aboutRoute from './about'

export default {
  [homeRoute.path]: homeRoute,
  [`${homeRoute.path}index.html`]: homeRoute,
  [scheduleRoute.path]: scheduleRoute,
  [speakersRoute.path]: speakersRoute,
  [workshopRoute.path]: workshopRoute,
  [aboutRoute.path]: aboutRoute,
}
