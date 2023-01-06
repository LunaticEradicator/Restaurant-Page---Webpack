import { item, h1, quote } from "../appendItem";
import foodName, { foodItems } from "../item";


function itemTab() {
    item.addEventListener('click', (e) => {
        document.body.classList.add('itemBody');
        document.body.classList.remove('contactBody');
        // h1.style.display = 'none';
        h1.style.opacity = 0;
        quote.style.opacity = 0;
        foodItems.style.opacity = 100;
        foodName();
    });
}

export default itemTab;
