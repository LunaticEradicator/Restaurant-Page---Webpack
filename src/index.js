/* eslint-disable no-underscore-dangle */
import _ from 'lodash';

const item = document.querySelector('.item');
const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
const h1 = document.querySelector('h1');
const foodItems = document.querySelector('.foodItems');


const comp = () => {
    const element = document.createElement('div');
    element.textContent = _.join(['Demo', 'Webpack'], ' ');
    return element;
}
item.addEventListener("click", e => {
    document.body.classList.add('itemBody');
    document.body.classList.remove('contactBody');
    h1.style.display = "none";
    h1.style.opacity = 0;
    foodItems.style.opacity = 100;
    // alert('damn');
})
home.addEventListener("click", e => {
    document.body.classList.add('homeBody');
    document.body.classList.remove('itemBody');
    document.body.classList.remove('contactBody');
    h1.style.display = "block";
    h1.style.opacity = 100;
    foodItems.style.opacity = 0;

    // alert('damn');
})
contact.addEventListener("click", e => {
    document.body.classList.remove('itemBody');
    document.body.classList.add('contactBody');
    h1.style.opacity = 0;
    foodItems.style.opacity = 0;

    // alert('damn');
})
// document.body.append(comp())
