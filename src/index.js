import { home, item, contact, h1, quote } from "./appendItem";
import foodName, { foodItems } from "./item";
import contactDetails, { bottomMenuFlex } from "./contact";

home.classList.add('addOutline');
function homeTab() {
    home.addEventListener('click', (e) => {
        document.body.classList.add('homeBody');
        document.body.classList.remove('itemBody');
        document.body.classList.remove('contactBody');
        h1.style.display = 'block';
        h1.style.opacity = 100;
        quote.style.opacity = 100;
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
        h1.style.display = 'none';
        quote.style.opacity = 0;
        foodItems.style.opacity = 100;
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
        h1.style.display = 'none';
        quote.style.opacity = 0;
        foodItems.style.opacity = 0;
        home.classList.remove('addOutline');
        item.classList.remove('addOutline');
        contact.classList.add('addOutline');
        foodItems.remove();
        contactDetails();
    });
}

export { itemTab, homeTab, contactTab };
