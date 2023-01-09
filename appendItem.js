"use strict";
(self["webpackChunkrestaurant_page_webpack"] = self["webpackChunkrestaurant_page_webpack"] || []).push([["appendItem"],{

/***/ "./src/appendItem.js":
/*!***************************!*\
  !*** ./src/appendItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h1": () => (/* binding */ h1),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "homeDiv": () => (/* binding */ homeDiv),
/* harmony export */   "item": () => (/* binding */ item),
/* harmony export */   "mainSection": () => (/* binding */ mainSection),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "quote": () => (/* binding */ quote)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHTML);




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/appendItem.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kSXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7QUFDNEM7QUFDdEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtLS13ZWJwYWNrLy4vc3JjL2FwcGVuZEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdxJyk7XHJcblxyXG5cclxuY29uc3QgYXBwZW5kSFRNTCA9ICgpID0+IHtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG5cclxuICAgIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW5TZWN0aW9uJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xyXG5cclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWVEaXYnKTtcclxuICAgIGgxLnRleHRDb250ZW50ID0gXCJTY2hpem8nc1wiXHJcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9IGBXaGVyZSBldmVyeSBmbGF2b3IgdGVsbHMgYSBzdG9yeSAhYFxyXG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcclxuXHJcblxyXG4gICAgbWVudS5hcHBlbmQoaG9tZSwgaXRlbSwgY29udGFjdCk7XHJcbiAgICBtYWluU2VjdGlvbi5hcHBlbmQobWVudSwgZm9vdGVyKTtcclxuICAgIG1haW5TZWN0aW9uLmFwcGVuZChob21lRGl2KTtcclxuICAgIGhvbWVEaXYuYXBwZW5kKGgxLCBmb290ZXIpO1xyXG4gICAgZm9vdGVyLmFwcGVuZChxdW90ZSk7XHJcbiAgICBjb250ZW50LmFwcGVuZChtYWluU2VjdGlvbik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEhUTUw7XHJcbmV4cG9ydCB7IGl0ZW0sIGgxLCBob21lLCBjb250YWN0LCBxdW90ZSwgbWFpblNlY3Rpb24sIG1lbnUsIGhvbWVEaXYgfTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==