import { mainSection } from "./appendItem";
import './style.css';


const foodItems = document.createElement('div');
const itemOne = document.createElement('div');
const itemTwo = document.createElement('div');
const itemThree = document.createElement('div');
const itemFour = document.createElement('div');
const itemFive = document.createElement('div');
const itemSix = document.createElement('div');
const itemSeven = document.createElement('div');
const itemEight = document.createElement('div');

const spanOne = document.createElement('span');
const spanTwo = document.createElement('span');
const spanThree = document.createElement('span');
const spanFour = document.createElement('span');
const spanFive = document.createElement('span');
const spanSix = document.createElement('span');
const spanSeven = document.createElement('span');
const spanEight = document.createElement('span');

const foodPicOne = document.createElement('div');
const foodPicTwo = document.createElement('div');
const foodPicThree = document.createElement('div');
const foodPicFour = document.createElement('div');
const foodPicFive = document.createElement('div');
const foodPicSix = document.createElement('div');
const foodPicSeven = document.createElement('div');
const foodPicEight = document.createElement('div');

function foodName() {
    spanOne.textContent = 'Burger - 5$';
    spanTwo.textContent = 'Salmon - 21$';
    spanThree.textContent = 'Macroni - 8$';
    spanFour.textContent = 'Shrimp - 15$';
    spanFive.textContent = 'Sushi - 11$';
    spanSix.textContent = 'Steak - 25$';
    spanSeven.textContent = 'Pasta - 13$';
    spanEight.textContent = 'Mojito - 17$';

    itemOne.classList.add('itemOne');
    itemTwo.classList.add('itemTwo');
    itemThree.classList.add('itemThree');
    itemFour.classList.add('itemFour');
    itemFive.classList.add('itemFive');
    itemSix.classList.add('itemSix');
    itemSeven.classList.add('itemSeven');
    itemEight.classList.add('itemEight');


    foodItems.classList.add('foodItems');

    foodPicOne.classList.add('foodPicOne');
    foodPicTwo.classList.add('foodPicTwo');
    foodPicThree.classList.add('foodPicThree');
    foodPicFour.classList.add('foodPicFour');
    foodPicFive.classList.add('foodPicFive');
    foodPicSix.classList.add('foodPicSix');
    foodPicSeven.classList.add('foodPicSeven');
    foodPicEight.classList.add('foodPicEight');

    itemOne.append(spanOne);
    itemTwo.append(spanTwo);
    itemThree.append(spanThree);
    itemFour.append(spanFour);
    itemFive.append(spanFive);
    itemSix.append(spanSix);
    itemSeven.append(spanSeven);
    itemEight.append(spanEight);
    mainSection.append(foodItems);

    itemOne.append(foodPicOne);
    itemTwo.append(foodPicTwo);
    itemThree.append(foodPicThree);
    itemFour.append(foodPicFour);
    itemFive.append(foodPicFive);
    itemSix.append(foodPicSix);
    itemSeven.append(foodPicSeven);
    itemEight.append(foodPicEight);

    foodItems.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven, itemEight);

}

export { foodItems };
export default foodName;