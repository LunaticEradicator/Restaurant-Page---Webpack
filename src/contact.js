import { mainSection } from "./appendItem";

const aboutUs = document.createElement('div');
const bottomMenuFlex = document.createElement('div');
const aboutUsHeading = document.createElement('h2');
const aboutUsDiv = document.createElement('div');
const aboutUsSpan = document.createElement('span');

const details = document.createElement('div');
const detailsDiv = document.createElement('div');
const detailsHeading = document.createElement('h2');

const addressDiv = document.createElement('div');
const timingDiv = document.createElement('div');
const numberDiv = document.createElement('div');

const addressSpan = document.createElement('span');
const timingSpan = document.createElement('span');
const numberSpan = document.createElement('span');

function contactDetails() {
    aboutUs.classList.add('aboutUs');
    bottomMenuFlex.classList.add('bottomMenuFlex');

    aboutUsHeading.classList.add('aboutUsHeading');
    aboutUsHeading.textContent = `Serving Since 21th Century`;

    aboutUsDiv.classList.add('aboutUsDiv');

    aboutUsSpan.classList.add('aboutUsSpan');
    aboutUsSpan.textContent = "Rated as the Top restaurant to visit in Sch, Schizo's is home to all kind's of food and fusion from around the world, so our customer feels right at 'home'!"

    detailsDiv.classList.add('detailsDiv');
    details.classList.add('details');
    detailsHeading.classList.add('detailsHeading');
    detailsHeading.textContent = 'Contact Detail';
    addressDiv.classList.add('addressDiv');
    addressSpan.classList.add('addressSpan');
    addressSpan.textContent = "Address: Some Address Bruh";

    timingDiv.classList.add('timingDiv');
    timingSpan.classList.add('timingSpan');
    timingSpan.textContent = "Time: 9:00am - 10:00pm";

    numberDiv.classList.add('numberDiv');
    numberSpan.classList.add('numberSpan');
    numberSpan.textContent = 'Phone : +91 12324535';

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