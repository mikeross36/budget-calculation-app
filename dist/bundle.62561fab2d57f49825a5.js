/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/budget-controller.js":
/*!*************************************!*\
  !*** ./src/js/budget-controller.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = /*#__PURE__*/_createClass(function Item(id, description, value) {
  _classCallCheck(this, Item);

  this.id = id;
  this.description = description;
  this.value = value;
});

var Income = /*#__PURE__*/function (_Item) {
  _inherits(Income, _Item);

  var _super = _createSuper(Income);

  function Income(id, description, value) {
    _classCallCheck(this, Income);

    return _super.call(this, id, description, value);
  }

  return _createClass(Income);
}(Item);

var Expense = /*#__PURE__*/function (_Item2) {
  _inherits(Expense, _Item2);

  var _super2 = _createSuper(Expense);

  function Expense(id, description, value) {
    var _this;

    _classCallCheck(this, Expense);

    _this = _super2.call(this, id, description, value);
    _this.percentage = -1;
    return _this;
  }

  return _createClass(Expense);
}(Item);

var budgetController = function () {
  var db = {
    allItems: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    },
    budget: 0,
    percentage: -1
  };
  return {
    createNewItem: function createNewItem(type, desc, val) {
      var id, newItem;

      if (db.allItems[type].length > 0) {
        id = db.allItems[type][db.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      } // 


      if (type === "inc") {
        newItem = new Income(id, desc, val);
      } else if (type === "exp") {
        newItem = new Expense(id, desc, val);
      } // 


      db.allItems[type].push(newItem);
      return newItem;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (budgetController);

/***/ }),

/***/ "./src/js/ui-controller.js":
/*!*********************************!*\
  !*** ./src/js/ui-controller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");


var uiController = function () {
  var domElements = {
    inputType: ".add-type",
    inputDescription: ".add-description",
    inputValue: ".add-value",
    incomeList: ".income-list",
    expenseList: ".expense-list",
    addBtn: ".add-btn"
  };
  return {
    getInputData: function getInputData() {
      return {
        type: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(domElements.inputType).value,
        description: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(domElements.inputDescription).value,
        value: +(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(domElements.inputValue).value
      };
    },
    displayListItem: function displayListItem(item, type) {
      var list, tempEl, newEl;

      if (type === "inc") {
        list = domElements.incomeList;
        tempEl = "\n                    <div class=\"item\" id=\"inc-%id%\">\n                         <div class=\"item-delete\">\n                            <button class=\"item-delete-btn\">x</button>\n                        </div>\n                        <div class=\"item-description\">%description%</div>\n                        <div class=\"value-wrapper\">\n                            <div class=\"item-value\">%value%</div>                        \n                        </div>\n                    </div>\n                ";
      } else if (type === "exp") {
        list = domElements.expenseList;
        tempEl = "\n                    <div class=\"item\" id=\"exp-%id%\">\n                        <div class=\"item-delete\">\n                            <button class=\"item-delete-btn\">x</button>\n                        </div>\n                        <div class=\"item-description\">%description%</div>\n                        <div class=\"value-wrapper\">\n                            <div class=\"item-value\">%value%</div>\n                            <div class=\"item-percentage\">%21%</div>                           \n                        </div>\n                    </div>\n                ";
      }

      newEl = tempEl.replace("%id%", item.id);
      newEl = newEl.replace("%description%", item.description);
      newEl = newEl.replace("%value%", item.value);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.qs)(list).insertAdjacentHTML("beforeend", newEl);
    },
    getDomElements: function getDomElements() {
      return domElements;
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiController);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qs": () => (/* binding */ qs)
/* harmony export */ });
function qs(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return parent.querySelector(selector);
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: linear-gradient(to right, #9b9a9a, #c7c5c5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n}\n\n.budget {\n  width: 25rem;\n  margin: auto;\n  padding: 0.5rem;\n}\n.budget-ui {\n  display: grid;\n  gap: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.budget-ui-title {\n  margin: 10px;\n  color: #fff;\n  text-shadow: 0.1rem 0.1rem 0.1rem #000;\n  font-size: 1.5rem;\n}\n\n.budget-budget,\n.budget-income,\n.budget-expense {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0.5rem;\n  color: #fff;\n  text-shadow: 0.1rem 0.1rem 0.1rem #525151;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.budget-budget {\n  background: linear-gradient(to right, #2980b9, #2c3e50);\n}\n\n.budget-income {\n  background: linear-gradient(to right, #3f9227, #165201);\n}\n\n.budget-expense {\n  background: linear-gradient(to left, #cb2d3e, #ef473a);\n}\n.budget-expense-percentage {\n  background-color: #fafaa5;\n  padding: 0 0.2rem;\n  font-size: 1rem;\n  color: #000;\n  border: 1px solid gray;\n  text-shadow: none;\n}\n.budget-expense .value-wrapper {\n  width: 33%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.budget-details {\n  width: 25rem;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.add-container {\n  margin: 5px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.add-container .add-type,\n.add-container .add-description,\n.add-container .add-value {\n  height: 35px;\n  margin: 5px 4px;\n  border-radius: 3px;\n  border: 1px solid transparent;\n  border-top: none;\n  border-bottom: 1px solid #DDD;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;\n}\n.add-container .add-type.red-focus,\n.add-container .add-description.red-focus,\n.add-container .add-value.red-focus {\n  border: 1px solid red;\n}\n.add-container .add-type:focus,\n.add-container .add-description:focus,\n.add-container .add-value:focus {\n  outline: none;\n}\n\n.add-btn {\n  margin: 15px;\n  width: 120px;\n  height: 50px;\n  background: #9b9a9a;\n  border: 2px solid #9b9a9a;\n  border-radius: 10px;\n  box-shadow: 0px 10px 25px #9b9a9a, 0px -10px 25px #c2c0c0, inset 0px -5px 10px #9b9a9a, inset 0px 5px 10px #c2c0c0;\n  color: #ffffff;\n  text-shadow: 0.1rem 0.1rem 0.1rem #525151;\n  font-size: 15px;\n  transition: all ease-in-out 0.3s;\n  cursor: pointer;\n}\n.add-btn:focus {\n  outline: none;\n}\n.add-btn:active {\n  transform: translate(-5px, 15px);\n}\n.add-btn.red {\n  color: red;\n  text-shadow: none;\n  font-weight: 700;\n}\n\n.details-container {\n  width: 100%;\n  display: grid;\n  gap: 0.5rem;\n}\n.details-container .income-title,\n.details-container .expense-title {\n  color: #fff;\n  text-shadow: 0.1rem 0.1rem 0.1rem #000;\n}\n.details-container .income-list .item-value {\n  color: #3f9227;\n  font-weight: 700;\n}\n.details-container .expense-list .item-value {\n  color: #cb2d3e;\n  font-weight: 700;\n}\n.details-container .item {\n  width: 100%;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  justify-items: start;\n  background-color: #fff;\n  text-transform: capitalize;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n.details-container .item-delete-btn {\n  background-color: rgb(250, 94, 94);\n  color: white;\n  cursor: pointer;\n  border: none;\n}\n.details-container .item-percentage {\n  background-color: #fafaa5;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #000;\n  border: 1px solid gray;\n  margin-left: 10px;\n  padding: 0 0.2rem;\n}\n.details-container .item .value-wrapper {\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"AAAA;EACI,uDAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,YAAA;EACA,YAAA;EACA,eAAA;AACJ;AACI;EACI,aAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;AACR;AAEI;EACI,YAAA;EACA,WAAA;EACA,sCAAA;EACA,iBAAA;AAAR;;AAIA;;;EAGI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,WAAA;EACA,yCAAA;EACA,uHAAA;AADJ;;AAIA;EACI,uDAAA;AADJ;;AAIA;EACI,uDAAA;AADJ;;AAIA;EACI,sDAAA;AADJ;AAGI;EACI,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,iBAAA;AADR;AAII;EACI,UAAA;EACA,aAAA;EACA,8BAAA;AAFR;;AAMA;EACI,YAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAHJ;AAKI;;;EAGI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBAAA;EACA,6BAAA;EACA,8EAAA;AAHR;AAKQ;;;EACI,qBAAA;AADZ;AAKI;;;EAGI,aAAA;AAHR;;AAOA;EACI,YAAA;EACA,YAAA;EACH,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kHAAA;EACA,cAAA;EACG,yCAAA;EACH,eAAA;EACG,gCAAA;EACA,eAAA;AAJJ;AAMI;EACI,aAAA;AAJR;AAOI;EACI,gCAAA;AALR;AAQI;EACI,UAAA;EACA,iBAAA;EACA,gBAAA;AANR;;AAWA;EACI,WAAA;EACA,aAAA;EACA,WAAA;AARJ;AAUI;;EAEI,WAAA;EACA,sCAAA;AARR;AAWI;EACI,cAAA;EACA,gBAAA;AATR;AAYI;EACI,cAAA;EACA,gBAAA;AAVR;AAaI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,qCAAA;EACA,SAAA;EACA,oBAAA;EACA,sBAAA;EACA,0BAAA;EACA,uHAAA;AAXR;AAaQ;EACI,kCAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AAXZ;AAcQ;EACI,yBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,iBAAA;EACA,iBAAA;AAZZ;AAeQ;EACI,cAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAbZ","sourcesContent":["body {\r\n    background: linear-gradient(to right, #9b9a9a, #c7c5c5);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.budget {\r\n    width: 25rem;\r\n    margin: auto;\r\n    padding: .5rem;\r\n\r\n    &-ui {\r\n        display: grid;\r\n        gap: .5rem;\r\n        font-size: 1.2rem;\r\n        font-weight: 700;\r\n    }\r\n    \r\n    &-ui-title {\r\n        margin: 10px;\r\n        color: #fff;\r\n        text-shadow: .1rem .1rem .1rem #000;\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n.budget-budget, \r\n.budget-income, \r\n.budget-expense {\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 .5rem;\r\n    color: #fff;\r\n    text-shadow: .1rem .1rem .1rem #525151;\r\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n    \r\n}\r\n.budget-budget {\r\n    background: linear-gradient(to right, #2980b9, #2c3e50);\r\n}\r\n\r\n.budget-income {\r\n    background: linear-gradient(to right, #3f9227, #165201);\r\n}\r\n\r\n.budget-expense {\r\n    background: linear-gradient(to left, #cb2d3e, #ef473a);\r\n\r\n    &-percentage {\r\n        background-color: #fafaa5;\r\n        padding: 0 .2rem;\r\n        font-size: 1rem;\r\n        color: #000;\r\n        border: 1px solid gray;\r\n        text-shadow: none;\r\n    }\r\n\r\n    & .value-wrapper {\r\n        width: 33%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n.budget-details {\r\n    width: 25rem;\r\n    margin: .5rem;\r\n    padding: .5rem;\r\n}\r\n\r\n.add-container {\r\n    margin: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n\r\n    .add-type, \r\n    .add-description, \r\n    .add-value {\r\n        height: 35px;\r\n        margin: 5px 4px;\r\n        border-radius: 3px;\r\n        border: 1px solid transparent;\r\n        border-top: none;\r\n        border-bottom: 1px solid #DDD;\r\n        box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;\r\n\r\n        &.red-focus {\r\n            border: 1px solid red;\r\n        }\r\n    }\r\n\r\n    .add-type:focus, \r\n    .add-description:focus, \r\n    .add-value:focus {\r\n        outline: none;\r\n    }\r\n}\r\n\r\n.add-btn {\r\n    margin: 15px;\r\n    width: 120px;\r\n\theight: 50px;\r\n\tbackground: #9b9a9a;\r\n\tborder: 2px solid #9b9a9a;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0px 10px 25px #9b9a9a, 0px -10px 25px #c2c0c0, inset 0px -5px 10px #9b9a9a, inset 0px 5px 10px #c2c0c0;\r\n\tcolor: #ffffff;\r\n    text-shadow: .1rem .1rem .1rem #525151;\r\n\tfont-size: 15px;\r\n    transition: all ease-in-out .3s;\r\n    cursor: pointer;\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n\r\n    &:active {\r\n        transform: translate(-5px, 15px);\r\n    }\r\n\r\n    &.red {\r\n        color: red;\r\n        text-shadow: none;\r\n        font-weight: 700;\r\n    }\r\n}\r\n\r\n\r\n.details-container {\r\n    width: 100%;\r\n    display: grid;\r\n    gap: .5rem;\r\n\r\n    .income-title, \r\n    .expense-title {\r\n        color: #fff;\r\n        text-shadow: .1rem .1rem .1rem #000;\r\n    }\r\n\r\n    .income-list .item-value {\r\n        color: #3f9227;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .expense-list .item-value {\r\n        color: #cb2d3e;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .item {\r\n        width: 100%;\r\n        padding: 5px;\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: 1rem;\r\n        justify-items: start;\r\n        background-color: #fff;\r\n        text-transform: capitalize;\r\n        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n\r\n        &-delete-btn {\r\n            background-color: rgb(250, 94, 94);\r\n            color: white;\r\n            cursor: pointer;\r\n            border: none;\r\n        }\r\n\r\n        &-percentage {\r\n            background-color: #fafaa5;\r\n            font-size: .9rem;\r\n            font-weight: 700;\r\n            color: #000;\r\n            border: 1px solid gray;\r\n            margin-left: 10px;\r\n            padding: 0 .2rem;\r\n        }\r\n\r\n        .value-wrapper {\r\n            padding: 0 5px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-controller.js */ "./src/js/ui-controller.js");
/* harmony import */ var _budget_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget-controller.js */ "./src/js/budget-controller.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");





var globalController = function (uiCtrl, budgCtrl) {
  var ctrlAddNewItem = function ctrlAddNewItem() {
    var input = uiCtrl.getInputData();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      var newItem = budgCtrl.createNewItem(input.type, input.description, input.value);
      uiCtrl.displayListItem(newItem, input.type);
    }
  };

  var eventTriggering = function eventTriggering() {
    var domEl = uiCtrl.getDomElements();
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.qs)(domEl.addBtn).addEventListener("click", ctrlAddNewItem);
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        ctrlAddNewItem();
      }
    });
  };

  return {
    init: function init() {
      eventTriggering();
    }
  };
}(_ui_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"], _budget_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

globalController.init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.62561fab2d57f49825a5.js.map