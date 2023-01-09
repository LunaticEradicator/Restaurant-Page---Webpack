const content = document.createElement('div');
const mainSection = document.createElement('div');
const menu = document.createElement('div');
const home = document.createElement('div');
const item = document.createElement('div');
const contact = document.createElement('div');
const homeDiv = document.createElement('div');
const h1 = document.createElement('h1');
const footer = document.createElement('footer');
const quote = document.createElement('q');


const appendHTML = () => {
    content.classList.add('content');

    mainSection.classList.add('mainSection');
    menu.classList.add('menu');

    home.textContent = 'Home';
    item.textContent = 'Menu';
    contact.textContent = 'About Us';

    home.classList.add('home');
    item.classList.add('item');
    contact.classList.add('contact');

    homeDiv.classList.add('homeDiv');
    h1.textContent = "Schizo's"
    quote.textContent = `Where every flavor tells a story !`
    quote.classList.add('quote');


    menu.append(home, item, contact);
    mainSection.append(menu, footer);
    mainSection.append(homeDiv);
    homeDiv.append(h1, footer);
    footer.append(quote);
    content.append(mainSection);
    document.body.append(content);

}

export default appendHTML;
export { item, h1, home, contact, quote, mainSection, menu, homeDiv };

