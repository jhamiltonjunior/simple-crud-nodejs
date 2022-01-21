export const header = document.querySelectorAll('[data-animate-header]');
export const elementPrimary = document.querySelectorAll('[data-animation-primary]');
export const allElementsSpecify = document.querySelectorAll('[data-all-animation-specify]');
export const allElementsEmphasis = document.querySelectorAll('[data-all-animation-emphasis]');
export const homeLink = document.querySelectorAll('.home-link');
export const logo = document.querySelector('.header-home__logo--title');

const animate = 'animate';
const animateEmphasis = 'animate-emphasis';
const resetColor = 'color-black';

setTimeout(() => {
  elementPrimary.forEach((element) => {
    element.classList.add(animate);
  });
}, 200);

window.addEventListener('scroll', () => {
  const windowTop = window.pageYOffset;
  const windowHeight = ((window.innerHeight * 1) / 15);

  header.forEach((element) => {
    if ((windowTop) > windowHeight) {
      element.classList.add(animate);
    } else {
      header.forEach((el) => {
        el.classList.remove(animate);
      });
    }
  });

  if ((windowTop) > windowHeight) {
    logo.classList.add('h-logo--scroll');
  } else {
    logo.classList.remove('h-logo--scroll');
  }
});

window.addEventListener('scroll', () => {
  const windowTop = window.pageYOffset;
  const windowHeight = ((window.innerHeight * 1) / 15);

  homeLink.forEach((element) => {
    if ((windowTop) > windowHeight) {
      element.classList.add(resetColor);
    } else {
      header.forEach((el) => {
        el.classList.remove(resetColor);
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const windowTop = window.pageYOffset;
  const windowHeight = ((window.innerHeight) / 4);

  allElementsSpecify.forEach((element) => {
    if ((windowTop) > windowHeight) {
      element.classList.add(animate);
    } else {
      allElementsSpecify.forEach((el) => {
        el.classList.remove(animate);
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const windowTop = window.pageYOffset;
  const windowHeight = ((window.innerHeight * 2) / 2.8);

  allElementsEmphasis.forEach((element) => {
    if ((windowTop) > windowHeight) {
      element.classList.add(animateEmphasis);
    } else {
      allElementsEmphasis.forEach((el) => {
        el.classList.remove(animateEmphasis);
      });
    }
  });
});
