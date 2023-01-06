import { home, h1, quote } from "../appendItem";
import foodName, { foodItems } from "../item";

function homeTab() {
    home.addEventListener('click', (e) => {
        document.body.classList.add('homeBody');
        document.body.classList.remove('itemBody');
        document.body.classList.remove('contactBody');
        h1.style.display = 'block';
        h1.style.opacity = 100;
        quote.style.opacity = 100;
        foodItems.style.opacity = 0;
        foodItems.remove();

        // // alert('damn');
    });
}

export default homeTab;
