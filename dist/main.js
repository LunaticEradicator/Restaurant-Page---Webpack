/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appendItem.js":
/*!***************************!*\
  !*** ./src/appendItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h1": () => (/* binding */ h1),
/* harmony export */   "item": () => (/* binding */ item)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendMainSection);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appendItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendItem */ "./src/appendItem.js");





// const item = document.querySelector('.item');
// const home = document.querySelector('.home');
// const contact = document.querySelector('.contact');
// const h1 = document.querySelector('h1');
// const foodItems = document.querySelector('.foodItems');

(0,_appendItem__WEBPACK_IMPORTED_MODULE_0__["default"])();

_appendItem__WEBPACK_IMPORTED_MODULE_0__.item.addEventListener('click', (e) => {
    document.body.classList.add('itemBody');
    document.body.classList.remove('contactBody');
  _appendItem__WEBPACK_IMPORTED_MODULE_0__.h1.style.display = 'none';
    _appendItem__WEBPACK_IMPORTED_MODULE_0__.h1.style.opacity = 0;
  // foodItems.style.opacity = 100;
  // // alert('damn');
});

// home.addEventListener('click', (e) => {
//     document.body.classList.add('homeBody');
//     document.body.classList.remove('itemBody');
//     document.body.classList.remove('contactBody');
//   h1.style.display = 'block';
//     h1.style.opacity = 100;
//     foodItems.style.opacity = 0;

//   // // alert('damn');
// });
// contact.addEventListener('click', (e) => {
//     document.body.classList.remove('itemBody');
//     document.body.classList.add('contactBody');
//     h1.style.opacity = 0;
//     foodItems.style.opacity = 0;
// });


// // import _ from 'lodash';
// // const comp = () => {
// //     const element = document.createElement('div');
// //     element.textContent = _.join(['Demo', 'Webpack'], ' ');
// //     return element;
// // };
// // document.body.append(comp())


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDO0FBQ2I7QUFDcEI7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQzJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFpQjtBQUNqQjtBQUNBLDhEQUFxQjtBQUNyQjtBQUNBO0FBQ0EsRUFBRSx5REFBZ0I7QUFDbEIsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLS0td2VicGFjay8uL3NyYy9hcHBlbmRJdGVtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0tLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLS0td2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLS0td2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS0tLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtLS13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHJcbmNvbnN0IGFwcGVuZE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5TZWN0aW9uJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9ICdJdGVtJztcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdTY2hpem8nXHJcblxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kKGhvbWUsIGl0ZW0sIGNvbnRhY3QpO1xyXG4gICAgbWFpblNlY3Rpb24uYXBwZW5kKG1lbnUpO1xyXG4gICAgbWFpblNlY3Rpb24uYXBwZW5kKGgxKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW5TZWN0aW9uKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZE1haW5TZWN0aW9uO1xyXG5leHBvcnQgeyBpdGVtLCBoMSB9O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0IGFwcGVuZE1haW5TZWN0aW9uLCB7IGl0ZW0sIGgxIH0gZnJvbSAnLi9hcHBlbmRJdGVtJztcclxuXHJcblxyXG5cclxuLy8gY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XHJcbi8vIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4vLyBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcclxuLy8gY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4vLyBjb25zdCBmb29kSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZEl0ZW1zJyk7XHJcblxyXG5hcHBlbmRNYWluU2VjdGlvbigpO1xyXG5cclxuaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2l0ZW1Cb2R5Jyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3RCb2R5Jyk7XHJcbiAgaDEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGgxLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gIC8vIGZvb2RJdGVtcy5zdHlsZS5vcGFjaXR5ID0gMTAwO1xyXG4gIC8vIC8vIGFsZXJ0KCdkYW1uJyk7XHJcbn0pO1xyXG5cclxuLy8gaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hvbWVCb2R5Jyk7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW1Cb2R5Jyk7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3RCb2R5Jyk7XHJcbi8vICAgaDEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbi8vICAgICBoMS5zdHlsZS5vcGFjaXR5ID0gMTAwO1xyXG4vLyAgICAgZm9vZEl0ZW1zLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuLy8gICAvLyAvLyBhbGVydCgnZGFtbicpO1xyXG4vLyB9KTtcclxuLy8gY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW1Cb2R5Jyk7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RCb2R5Jyk7XHJcbi8vICAgICBoMS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuLy8gICAgIGZvb2RJdGVtcy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuLy8gLy8gY29uc3QgY29tcCA9ICgpID0+IHtcclxuLy8gLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gLy8gICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBfLmpvaW4oWydEZW1vJywgJ1dlYnBhY2snXSwgJyAnKTtcclxuLy8gLy8gICAgIHJldHVybiBlbGVtZW50O1xyXG4vLyAvLyB9O1xyXG4vLyAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZChjb21wKCkpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=