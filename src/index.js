
import appendMainSection, { item, h1 } from './appendItem';



// const item = document.querySelector('.item');
// const home = document.querySelector('.home');
// const contact = document.querySelector('.contact');
// const h1 = document.querySelector('h1');
// const foodItems = document.querySelector('.foodItems');

appendMainSection();

item.addEventListener('click', (e) => {
    document.body.classList.add('itemBody');
    document.body.classList.remove('contactBody');
  h1.style.display = 'none';
    h1.style.opacity = 0;
  // foodItems.style.opacity = 100;
  // // alert('damn');
});

// home.addEventListener('click', (e) => {
//     document.body.classList.add('homeBody');
//     document.body.classList.remove('itemBody');
//     document.body.classList.remove('contactBody');
//   h1.style.display = 'block';
//     h1.style.opacity = 100;
//     foodItems.style.opacity = 0;

//   // // alert('damn');
// });
// contact.addEventListener('click', (e) => {
//     document.body.classList.remove('itemBody');
//     document.body.classList.add('contactBody');
//     h1.style.opacity = 0;
//     foodItems.style.opacity = 0;
// });


// // import _ from 'lodash';
// // const comp = () => {
// //     const element = document.createElement('div');
// //     element.textContent = _.join(['Demo', 'Webpack'], ' ');
// //     return element;
// // };
// // document.body.append(comp())

