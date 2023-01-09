import appendHTML from './appendItem';
import './style.css';
import { homeTab, itemTab, contactTab } from './index';

appendHTML();
homeTab();
itemTab();
contactTab();



// // import _ from 'lodash';
// // const comp = () => {
// //     const element = document.createElement('div');
// //     element.textContent = _.join(['Demo', 'Webpack'], ' ');
// //     return element;
// // };
// // document.body.append(comp())

