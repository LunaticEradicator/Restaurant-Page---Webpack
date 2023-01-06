const content = document.createElement('div');
const mainSection = document.createElement('div');
const menu = document.createElement('div');
const home = document.createElement('div');
const item = document.createElement('div');
const contact = document.createElement('div');
const h1 = document.createElement('h1');
const footer = document.createElement('footer');
const quote = document.createElement('q');


const appendHTML = () => {
    content.classList.add('content');

    mainSection.classList.add('mainSection');
    menu.classList.add('menu');

    home.textContent = 'Home';
    item.textContent = 'Item';
    contact.textContent = 'Contact';

    home.classList.add('home');
    item.classList.add('item');
    contact.classList.add('contact');

    h1.textContent = "Schizo's"
    quote.textContent = `Where every flavor tells a story !`
    quote.classList.add('quote');


    menu.append(home, item, contact);
    mainSection.append(menu);
    mainSection.append(h1);
    footer.append(quote);
    content.append(mainSection);
    document.body.append(content, footer);

}

export default appendHTML;
export { item, h1, home, contact, quote, mainSection };

