/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n\nlabel,\ninput,\ntextarea {\n  display: block;\n  margin: 0.5rem 0;\n}\n\nlabel {\n  font-weight: bold;\n}\n\ninput,\ntextarea {\n  font: inherit;\n  padding: 0.2rem 0.4rem;\n  width: 100%;\n  max-width: 30rem;\n  border: 1px solid #ccc;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n  background: #fff5f9;\n}\n\nbutton {\n  font: inherit;\n  background: #ff0062;\n  border: 1px solid #ff0062;\n  cursor: pointer;\n  color: white;\n  padding: 0.75rem 1rem;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover,\nbutton:active {\n  background: #a80041;\n  border-color: #a80041;\n}\n\n.projects {\n  margin: 1rem;\n  border: 1px solid #ff0062;\n}\n\n.projects header {\n  background: #ff0062;\n  height: 3.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#finished-projects {\n  border-color: #0044ff;\n}\n\n#finished-projects header {\n  background: #0044ff;\n}\n\n.projects h2 {\n  margin: 0;\n  color: white;\n}\n\n.projects ul {\n  list-style: none;\n  margin: 0;\n  padding: 1rem;\n}\n\n.projects li {\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);\n  padding: 1rem;\n  margin: 1rem;\n  background: white;\n}\n\n.projects li h2 {\n  color: #ff0062;\n  margin: 0.5rem 0;\n}\n\n#finished-projects li h2 {\n  color: #0044ff;\n}\n\n.projects li h3 {\n  color: #575757;\n  font-size: 1rem;\n}\n\n.project li p {\n  margin: 0;\n}\n\n.droppable {\n  background: #ffe3ee;\n}\n\n#finished-projects .droppable {\n  background: #d6e1ff;\n}\n\n#user-input {\n  margin: 1rem;\n  padding: 1rem;\n  border: 1px solid #ff0062;\n  background: #f7f7f7;\n}", "",{"version":3,"sources":["webpack://./src/styles/app.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;;;EAGE,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;;EAEE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;AACF;;AAEA;;EAEE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;EACA,YAAA;EACA,qBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,qBAAA;AACF;;AAEA;EACE,YAAA;EACA,yBAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,SAAA;EACA,YAAA;AACF;;AAEA;EACE,gBAAA;EACA,SAAA;EACA,aAAA;AACF;;AAEA;EACE,2CAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n\nlabel,\ninput,\ntextarea {\n  display: block;\n  margin: 0.5rem 0;\n}\n\nlabel {\n  font-weight: bold;\n}\n\ninput,\ntextarea {\n  font: inherit;\n  padding: 0.2rem 0.4rem;\n  width: 100%;\n  max-width: 30rem;\n  border: 1px solid #ccc;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n  background: #fff5f9;\n}\n\nbutton {\n  font: inherit;\n  background: #ff0062;\n  border: 1px solid #ff0062;\n  cursor: pointer;\n  color: white;\n  padding: 0.75rem 1rem;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover,\nbutton:active {\n  background: #a80041;\n  border-color: #a80041;\n}\n\n.projects {\n  margin: 1rem;\n  border: 1px solid #ff0062;\n}\n\n.projects header {\n  background: #ff0062;\n  height: 3.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#finished-projects {\n  border-color: #0044ff;\n}\n\n#finished-projects header {\n  background: #0044ff;\n}\n\n.projects h2 {\n  margin: 0;\n  color: white;\n}\n\n.projects ul {\n  list-style: none;\n  margin: 0;\n  padding: 1rem;\n}\n\n.projects li {\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);\n  padding: 1rem;\n  margin: 1rem;\n  background: white;\n}\n\n.projects li h2 {\n  color: #ff0062;\n  margin: 0.5rem 0;\n}\n\n#finished-projects li h2 {\n  color: #0044ff;\n}\n\n.projects li h3 {\n  color: #575757;\n  font-size: 1rem;\n}\n\n.project li p {\n  margin: 0;\n}\n\n.droppable {\n  background: #ffe3ee;\n}\n\n#finished-projects .droppable {\n  background: #d6e1ff;\n}\n\n#user-input {\n  margin: 1rem;\n  padding: 1rem;\n  border: 1px solid #ff0062;\n  background: #f7f7f7;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
class Component {
    constructor(templateElement, hostElement, insertAtStart, newElementId) {
        this.templateElement = (document.getElementById(templateElement));
        this.hostElement = document.getElementById(hostElement);
        const templateContent = (this.templateElement.content.cloneNode(true));
        this.element = templateContent.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
    }
}


/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectInput": () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _state_project_state_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/project-state-module */ "./src/state/project-state-module.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




class ProjectInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleElement = this.element.querySelector("#title");
        this.descriptionElement = (this.element.querySelector("#description"));
        this.peopleElement = (this.element.querySelector("#people"));
        this.configure();
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    renderContent() { }
    gatherUserInput() {
        const enteredTitle = this.titleElement.value;
        const enteredDescription = this.descriptionElement.value;
        const enteredPeople = this.peopleElement.value;
        const titleValidatable = new _utils_validation__WEBPACK_IMPORTED_MODULE_1__.ValidateObject({
            value: enteredTitle,
            required: true,
        });
        const descriptionValidatable = new _utils_validation__WEBPACK_IMPORTED_MODULE_1__.ValidateObject({
            value: enteredDescription,
            required: true,
            minLength: 5,
        });
        const peopleValidatable = new _utils_validation__WEBPACK_IMPORTED_MODULE_1__.ValidateObject({
            value: Number(enteredPeople),
            required: true,
            min: 1,
        });
        if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) ||
            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) ||
            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidatable)) {
            alert("Invalid input, try again!");
            return;
        }
        return [enteredTitle, enteredDescription, Number(enteredPeople)];
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            _state_project_state_module__WEBPACK_IMPORTED_MODULE_2__.projectState.addProject(title, description, people);
            this.element.reset();
        }
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_3__.BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItem": () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class ProjectItem extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        console.log(this.element);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        else {
            return `${this.project.people} persons`;
        }
    }
    dragStartHandler(_event) {
        _event.dataTransfer.setData("text/plain", this.project.id);
        _event.dataTransfer.effectAllowed = "move";
    }
    dragEndHandler(_event) { }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.persons;
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], ProjectItem.prototype, "dragEndHandler", null);


/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _state_project_state_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/project-state-module */ "./src/state/project-state-module.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-item */ "./src/components/project-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




class ProjectList extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(_event) {
        if (_event.dataTransfer && _event.dataTransfer.types[0] === "text/plain") {
            _event.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl.classList.add("droppable");
        }
    }
    dropHandler(_event) {
        const projectId = _event.dataTransfer.getData("text/plain");
        _state_project_state_module__WEBPACK_IMPORTED_MODULE_1__.projectState.moveProject(projectId, this.type === "active" ? "active" : "finished");
    }
    dragLeaveHandler(_event) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-project-list`);
        listEl.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new _project_item__WEBPACK_IMPORTED_MODULE_3__.ProjectItem(this.element.querySelector("ul").id, prjItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-project-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " PROJECTS";
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        _state_project_state_module__WEBPACK_IMPORTED_MODULE_1__.projectState.addListener((projects) => {
            const relevantProjects = projects.filter((p) => {
                if (this.type === "active") {
                    return p.status === "active";
                }
                return p.status === "finished";
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
}
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], ProjectList.prototype, "dropHandler", null);
__decorate([
    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], ProjectList.prototype, "dragLeaveHandler", null);


/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindThis": () => (/* binding */ BindThis)
/* harmony export */ });
function BindThis(_target, _methodName, descriptor) {
    const originalFn = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const modifyFn = originalFn.bind(this);
            return modifyFn;
        },
    };
    return adjDescriptor;
}


/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/state/project-state-module.ts":
/*!*******************************************!*\
  !*** ./src/state/project-state-module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectState": () => (/* binding */ ProjectState),
/* harmony export */   "projectState": () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");

class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, people) {
        const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, people, "active");
        this.projects.push(newProject);
        this.updateListener();
    }
    moveProject(id, newStatus) {
        const project = this.projects.find((p) => p.id === id);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListener();
        }
    }
    updateListener() {
        for (const listenerFn of this.listeners) {
            listenerFn([...this.projects]);
        }
    }
}
const projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateObject": () => (/* binding */ ValidateObject),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
class ValidateObject {
    constructor(configObj) {
        this.value = configObj.value;
        if (configObj.required) {
            this.required = configObj.required;
        }
        if (configObj.minLength) {
            this.minLength = configObj.minLength;
        }
        if (configObj.maxLength) {
            this.maxLength = configObj.maxLength;
        }
        if (configObj.min) {
            this.min = configObj.min;
        }
        if (configObj.max) {
            this.max = configObj.max;
        }
    }
}
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ "./src/components/project-input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ "./src/components/project-list.ts");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");



new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList("active");
new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList("finished");

})();

/******/ })()
;
//# sourceMappingURL=bundle0bd8d1efae2df7f749b2.js.map