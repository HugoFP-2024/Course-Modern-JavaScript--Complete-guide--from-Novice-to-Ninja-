/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.js */ \"./scripts/forecast.js\");\n\r\n\r\nconst cityForm = document.querySelector('.change-location');\r\nconst card = document.querySelector('.card');\r\nconst details = document.querySelector('.details');\r\nconst time = document.querySelector('img.time');\r\nconst icon = document.querySelector('.icon img');\r\n\r\nconst forecast = new _forecast_js__WEBPACK_IMPORTED_MODULE_0__.Forecast();\r\n\r\nconst updateUI = data => {\r\n\r\n    // const cityDets = data.cityDets;\r\n    // const weather = data.weather;\r\n    const { cityDets, weather } = data;\r\n\r\n    // Update the HTML content with city and weather details\r\n    details.innerHTML = `                \r\n        <h5 class=\"my-3\">${cityDets.EnglishName}</h5>\r\n        <div class=\"my-3\">${weather.WeatherText}</div>\r\n        <div class=\"display-4 my-4\">\r\n            <span>${weather.Temperature.Metric.Value}</span>\r\n            <span>&deg;C</span>\r\n        </div>`;\r\n\r\n    // Set the weather icon source dynamically\r\n    const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;\r\n    icon.setAttribute('src', iconSrc);\r\n\r\n    // let timeSrc = null;\r\n    // if(weather.IsDayTime){\r\n    //     timeSrc = 'img/day.svg'\r\n    // } else {\r\n    //     timeSrc = 'img/night.svg'\r\n    // }\r\n    let timeSrc = weather.IsDayTime ? '../img/day.svg' : '../img/night.svg';\r\n    time.setAttribute('src', timeSrc);\r\n\r\n    // if(card.classList.contains('d-none')){\r\n    //     card.classList.remove('d-none');\r\n    // }\r\n    card.classList.contains('d-none') ? card.classList.remove('d-none') : none;\r\n};\r\n\r\n// const updateCity = async (city) => {\r\n\r\n//     // Fetch city details and weather information using asynchronous functions\r\n//     const cityDets = await getCity(city);\r\n//     const weather = await getWeather(cityDets.Key);\r\n\r\n//     // return {\r\n//     //     cityDets: cityDets,\r\n//     //     weather: weather\r\n//     // };\r\n//     return {\r\n//         cityDets,\r\n//         weather\r\n//     };\r\n// };\r\n\r\ncityForm.addEventListener('submit', event => {\r\n\r\n    event.preventDefault();\r\n\r\n    const city = cityForm.city.value.trim();\r\n    cityForm.reset();\r\n\r\n    forecast.updateCity(city)\r\n        .then(data => updateUI(data))\r\n        .catch(err => console.log(err));\r\n\r\n    localStorage.setItem('city', city);\r\n});\r\n\r\nif (localStorage.getItem('city')) {\r\n    // If a city is stored in local storage, update the UI with its weather details\r\n    forecast.updateCity(localStorage.getItem('city'))\r\n        .then(data => updateUI(data))\r\n        .catch(err => console.log(err));\r\n}\n\n//# sourceURL=webpack://weather_app/./scripts/app.js?\n}");

/***/ }),

/***/ "./scripts/forecast.js":
/*!*****************************!*\
  !*** ./scripts/forecast.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Forecast: () => (/* binding */ Forecast)\n/* harmony export */ });\nclass Forecast{\r\n    constructor(){\r\n        this.key = \"MVMC9LAWjHa9eiHQhGVsb4Ze5TzizoEK\";\r\n        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';\r\n        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';\r\n    }\r\n\r\n    async updateCity(city){\r\n        const cityDets = await this.getCity(city);\r\n        const weather = await this.getWeather(cityDets.Key);\r\n\r\n        return {\r\n            cityDets,\r\n            weather\r\n        };\r\n    }\r\n\r\n    async getWeather(id){\r\n        const query = `${id}?apikey=${this.key}`;\r\n\r\n        const response = await fetch(this.weatherURI + query);\r\n        const data = await response.json();\r\n\r\n        return data[0];\r\n    }\r\n\r\n    async getCity(city) {   \r\n        const query = `?apikey=${this.key}&q=${city}`;\r\n\r\n        const response = await fetch(this.cityURI + query);\r\n        const data = await response.json();\r\n        \r\n        return data[0];    \r\n    }\r\n}\r\n\r\n// const key = 'tcKdYh784yVR0YklibOFhoJYb9iOeASZ';\r\n\r\n// const getCity = async (city) => {\r\n\r\n//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';\r\n//     const query = `?apikey=${key}&q=${city}`;\r\n\r\n//     const response = await fetch(base + query);\r\n//     const data = await response.json();\r\n    \r\n//     return data[0];    \r\n// };\r\n\r\n// const getWeather = async (cityKey) => {\r\n    \r\n//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';\r\n//     const query = `${cityKey}?apikey=${key}`;\r\n\r\n//     const response = await fetch( base + query);\r\n//     const data = await response.json();\r\n\r\n//     return data[0];\r\n// };\n\n//# sourceURL=webpack://weather_app/./scripts/forecast.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;