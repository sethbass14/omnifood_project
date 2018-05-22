document.addEventListener('DOMContentLoaded', () => {
  const sectionFeatures = document.getElementsByClassName('section-features')[0]
  const nav = document.getElementsByTagName('nav')[0]

  document.addEventListener('scroll', () => stickyify(sectionFeatures, nav))
})

const scrolledPast = (scrollEl, navEl) => {
  let bodyRect = document.body.getBoundingClientRect();
  let scrollRect = scrollEl.getBoundingClientRect();
  // 80 is the height of the sticky nav bar. Offsetting here makes the nav appear as its height hits the next section.
  let offSet = scrollRect.top - bodyRect.top - 80
  const currentHeight = window.scrollY
  return offSet <= currentHeight
}

const stickyify = (scrollEl, navEl) => {
  navEl.className = scrolledPast(scrollEl, navEl) ? 'sticky' : ''
}
