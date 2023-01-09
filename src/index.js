import { home, item, contact, homeDiv } from "./appendItem";
import foodName, { foodItems } from "./item";
import contactDetails, { bottomMenuFlex } from "./about us";

home.classList.add('addOutline');
function homeTab() {
    home.addEventListener('click', (e) => {
        document.body.classList.add('homeBody');
        document.body.classList.remove('itemBody');
        document.body.classList.remove('contactBody');
        homeDiv.style.display = 'block';
        foodItems.style.display = 'none';
        bottomMenuFlex.style.display = 'none';
        home.classList.add('addOutline');
        item.classList.remove('addOutline');
        contact.classList.remove('addOutline');
        foodItems.remove();
        bottomMenuFlex.remove();
    });
}

function itemTab() {
    item.addEventListener('click', (e) => {
        document.body.classList.add('itemBody');
        document.body.classList.remove('contactBody');
        homeDiv.style.display = 'none';
        foodItems.style.display = 'grid';
        bottomMenuFlex.style.display = 'none';
        home.classList.remove('addOutline');
        item.classList.add('addOutline');
        contact.classList.remove('addOutline');
        foodName();
        bottomMenuFlex.remove();
    });
}

function contactTab() {
    contact.addEventListener('click', (e) => {
        document.body.classList.remove('itemBody');
        document.body.classList.add('contactBody');
        homeDiv.style.display = 'none';
        foodItems.style.display = 'none';
        bottomMenuFlex.style.display = 'block';
        home.classList.remove('addOutline');
        item.classList.remove('addOutline');
        contact.classList.add('addOutline');
        foodItems.remove();
        contactDetails();
    });
}

export { itemTab, homeTab, contactTab };
