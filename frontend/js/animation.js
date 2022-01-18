export const target = document.querySelectorAll('[data-animation]');

const className = 'animate';

setTimeout(() => {
  target.forEach((element) => {
    console.log(element.ofsetTop);
    element.classList.add(className);
  });
}, 200);

// const animateScroll = () => {
//   target.forEach((element) => {
//     console.log(element.ofsetTop);
//     element.classList.add(className);
//   });
// };

// animateScroll();

// window.addEventListener('scroll', () => {
//   const windowTop = window.pageYOffset;

//   console.log(windowTop);
//   target.forEach((element) => {
//     console.log(element.ofsetTop);
//     element.classList.add(className);
//   });
// });
