const RISE_UP = 'rise-up';
const ONE_SECOND = '1.0s';

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtns = [...document.getElementsByClassName('scroll-buttons')];

  const nav = document.getElementsByTagName('nav')[0];
  const sectionFeatures = document.getElementsByClassName('section-features')[0];
  const sectionPlans = document.getElementsByClassName('section-plans')[0];
  const sectionSteps = document.getElementsByClassName('section-steps')[0];

  const appScreen = document.getElementsByClassName('app-screen')[0];

  addNavClickListener(scrollBtns);
  document.addEventListener('scroll', () => scrollHandler(sectionFeatures, nav, sectionSteps, appScreen));

});

const animate = (element, animation, duration) => {
  element.style.animationName = animation
  element.style.animationDuration = duration
  element.style.top = 0;
}

const addNavClickListener = navEls => {
  navEls.forEach(link => {
    const scrollEl = document.getElementById(link.dataset.scrollid)
    link.addEventListener('click', () => smoothScrollHandler(scrollEl))
  })
}

const getOffSet = scrollEl => {
  const bodyRect = document.body.getBoundingClientRect();
  const scrollRect = scrollEl.getBoundingClientRect();
  // 80 is the height of the sticky nav bar. Offsetting here makes the nav appear as its height hits the next section.
  const offSet = scrollRect.top - bodyRect.top - 80
  return offSet
}

const getBottomOffSet = scrollEl => {
  const bodyRect = document.body.getBoundingClientRect();
  const scrollRect = scrollEl.getBoundingClientRect();
  const offSet = scrollRect.top - bodyRect.top + scrollRect.height/2
  return offSet
}

const scrollHandler = (sectionFeatures, nav, sectionSteps, appScreen) => {
  stickyify(sectionFeatures, nav)
  if (scrolledTo(sectionSteps)) {
    appScreen.className = 'app-screen app-animate '
  }
}

const scrolledTo = scrollEl => {
  const offSetBottom = getBottomOffSet(scrollEl)
  const currentBottom = window.innerHeight + window.scrollY
  return offSetBottom <= currentBottom && inView(scrollEl)
}

const inView = scrollEl => {
  const elTop = getBottomOffSet(scrollEl) + 80
  return elTop >= window.scrollY
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
