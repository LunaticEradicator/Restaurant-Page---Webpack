/* eslint-disable no-underscore-dangle */
import _ from 'lodash';

const item = document.querySelector('.item');
const home = document.querySelector('.home');

const comp = () => {
    const element = document.createElement('div');
    element.textContent = _.join(['Demo', 'Webpack'], ' ');
    return element;
}
item.addEventListener("click", e => {
    document.body.classList.add('newBody');
    // alert('damn');
})
home.addEventListener("click", e => {
    document.body.classList.remove('newBody');
    // alert('damn');
})
// document.body.append(comp())
