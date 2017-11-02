// Polyfills
import 'es6-promise'
import 'whatwg-fetch'

import analytics from './modules/analytics'
analytics.init('UA-77889324-3')

import domready from './modules/domready'
import initRouter from './init/router'

// Routes
import routes from './routes'

initRouter(routes)

domready(() => {
  setTimeout(() => document.querySelector('html').classList.remove('loading'), 750)
})
