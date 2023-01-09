import { mainSection } from "./appendItem";
import './style.css';

// Contact Details
const details = document.createElement('div');
const detailsDiv = document.createElement('div');
const detailsHeading = document.createElement('h2');

const addressDiv = document.createElement('div');
const timingDiv = document.createElement('div');
const numberDiv = document.createElement('div');

const addressSpan = document.createElement('span');
const timingSpan = document.createElement('span');
const numberSpan = document.createElement('span');

// About Us
const aboutUs = document.createElement('div');
const bottomMenuFlex = document.createElement('div');
const aboutUsHeading = document.createElement('h2');
const aboutUsDiv = document.createElement('div');
const aboutUsSpan = document.createElement('span');


function contactDetails() {
    // Contact Details
    details.classList.add('details');
    detailsDiv.classList.add('detailsDiv');
    detailsHeading.classList.add('detailsHeading');
    detailsHeading.textContent = 'Contact Detail';

    addressDiv.classList.add('addressDiv');
    addressSpan.classList.add('addressSpan');
    timingDiv.classList.add('timingDiv');
    timingSpan.classList.add('timingSpan');
    numberDiv.classList.add('numberDiv');
    numberSpan.classList.add('numberSpan');

    addressSpan.textContent = "Address: Rosario Santa Fe";
    timingSpan.textContent = "Time: 9:00am - 10:00pm";
    numberSpan.textContent = 'Phone : +91 12324535';

    // About Us
    aboutUs.classList.add('aboutUs');
    bottomMenuFlex.classList.add('bottomMenuFlex');
    aboutUsHeading.classList.add('aboutUsHeading');
    aboutUsDiv.classList.add('aboutUsDiv');
    aboutUsSpan.classList.add('aboutUsSpan');

    aboutUsHeading.textContent = `Serving Since 21th Century`;
    aboutUsSpan.textContent = `Rated as the Top restaurant to visit in Rosario, Schizo's is home to all kind's of food and fusion from around the world, so our Habitué feels right at home`

    // Append
    details.append(detailsHeading, detailsDiv);
    detailsDiv.append(addressDiv, timingDiv, numberDiv);
    addressDiv.append(addressSpan);
    timingDiv.append(timingSpan);
    numberDiv.append(numberSpan);

    aboutUs.append(aboutUsHeading, aboutUsDiv);
    bottomMenuFlex.append(details, aboutUs);
    aboutUsDiv.append(aboutUsSpan);

    mainSection.append(bottomMenuFlex);
}

export default contactDetails;
export { bottomMenuFlex };