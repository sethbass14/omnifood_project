document.addEventListener('DOMContentLoaded', () => {
  const toPlansBtn = document.getElementsByClassName('js--scroll-to-plans')[0]

  const sectionFeatures = document.getElementsByClassName('section-features')[0]
  const nav = document.getElementsByTagName('nav')[0]
  const sectionPlans = document.getElementsByClassName('section-plans')[0]

  document.addEventListener('scroll', () => stickyify(sectionFeatures, nav))
  toPlansBtn.addEventListener('click', () => smoothScrollHandler(sectionPlans))
  // $('js--scroll-to-plans').click(function () {
  //   $('html, body').animate({scrollTop: $('js--section-plans').offset().top}, 1000);
  // })
})

const getOffSet = scrollEl => {
  
}

const scrolledPast = (scrollEl, navEl) => {
  const bodyRect = document.body.getBoundingClientRect();
  const scrollRect = scrollEl.getBoundingClientRect();
  // 80 is the height of the sticky nav bar. Offsetting here makes the nav appear as its height hits the next section.
  const offSet = scrollRect.top - bodyRect.top - 80
  const currentHeight = window.scrollY
  return offSet <= currentHeight
}

const stickyify = (scrollEl, navEl) =>
  navEl.className = scrolledPast(scrollEl, navEl) ? 'sticky' : ''

const smoothScrollHandler = scrollEl => {
  const bodyRect = document.body.getBoundingClientRect();
  const scrollElRect = scrollEl.getBoundingClientRect();
  const offset = scrollElRect.top - bodyRect.top;
  window.scroll({
    top: offset,
    behavior: 'smooth'
  })
}
