document.addEventListener('DOMContentLoaded', () => {
  const sectionFeatures = document.getElementsByClassName('section-features')[0]
  const nav = document.getElementsByTagName('nav')[0]

  document.addEventListener('scroll', () => stickyify(sectionFeatures, nav))
})

const scrolledPast = element => {
  let bodyRect = document.body.getBoundingClientRect();
  let elemRect = element.getBoundingClientRect();
  let offSet = elemRect.top - bodyRect.top
  const currentHeight = window.scrollY
  return offSet <= currentHeight
}

const stickyify = (scrollEl, navEl) => {
  navEl.className = scrolledPast(scrollEl) ? 'sticky' : ''
}
