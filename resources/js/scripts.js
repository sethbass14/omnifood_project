document.addEventListener('DOMContentLoaded', () => {
  const toPlansBtn = document.getElementsByClassName('js--scroll-to-plans')[0]
  const toFeaturesBtn = document.getElementsByClassName('js--scroll-to-start')[0]

  const sectionFeatures = document.getElementsByClassName('section-features')[0]
  const nav = document.getElementsByTagName('nav')[0]
  const sectionPlans = document.getElementsByClassName('section-plans')[0]

  document.addEventListener('scroll', () => stickyify(sectionFeatures, nav))
  toPlansBtn.addEventListener('click', () => smoothScrollHandler(sectionPlans))
  toFeaturesBtn.addEventListener('click', () => smoothScrollHandler(sectionFeatures))
})

const getOffSet = scrollEl => {
  const bodyRect = document.body.getBoundingClientRect();
  const scrollRect = scrollEl.getBoundingClientRect();
  // 80 is the height of the sticky nav bar. Offsetting here makes the nav appear as its height hits the next section.
  const offSet = scrollRect.top - bodyRect.top - 80
  return offSet
}

const scrolledPast = scrollEl => {
  const offSet = getOffSet(scrollEl)
  const currentHeight = window.scrollY
  return offSet <= currentHeight
}

const stickyify = (scrollEl, navEl) =>
  navEl.className = scrolledPast(scrollEl) ? 'sticky' : ''

const smoothScrollHandler = scrollEl => {
  const offset = getOffSet(scrollEl)
  window.scroll({
    top: offset,
    behavior: 'smooth'
  })
}
