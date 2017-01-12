import { each } from 'lodash'

export default () => {
  const path = window.location.pathname.split('#')[0] || '/'

  const navLinks = document.querySelectorAll('nav a')

  each(navLinks, (navLink) => {
    if (navLink.pathname === path) {
      navLink.classList.add('active')
    } else {
      navLink.classList.remove('active')
    }
  })
}
