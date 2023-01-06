import { contact, h1, quote } from "../appendItem";

function contactTab() {
    contact.addEventListener('click', (e) => {
        document.body.classList.remove('itemBody');
        document.body.classList.add('contactBody');
        h1.style.opacity = 0;
        quote.style.opacity = 0;
        // foodItems.style.opacity = 0;
    });
}

export default contactTab;