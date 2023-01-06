const content = document.getElementById('content');
const mainSection = document.createElement('div');
const menu = document.createElement('div');
const home = document.createElement('div');
const item = document.createElement('div');
const contact = document.createElement('div');
const h1 = document.createElement('h1');

const appendMainSection = () => {

    mainSection.classList.add('mainSection');
    menu.classList.add('menu');

    home.textContent = 'Home';
    item.textContent = 'Item';
    contact.textContent = 'Contact';
    h1.textContent = 'Schizo'

    home.classList.add('home');
    item.classList.add('item');
    contact.classList.add('contact');

    menu.append(home, item, contact);
    mainSection.append(menu);
    mainSection.append(h1);
    content.append(mainSection);

}

export default appendMainSection;
export { item, h1 };

