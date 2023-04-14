/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./handlers/ddb-client.js":
/*!********************************!*\
  !*** ./handlers/ddb-client.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ddbClient": () => (/* binding */ ddbClient)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ "@aws-sdk/client-dynamodb");
/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__);


const ddbClient = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__.DynamoDBClient({
  apiVersion: "latest",
  credentials: {
    accessKeyId: "ASIATHMZAGEGJMDRY7WF",
    secretAccessKey: "b3MeM3Bcc97CZbd0f77KRenDHoJtIaxstJV1DYF5",
    sessionToken: "IQoJb3JpZ2luX2VjEEkaCXVzLWVhc3QtMSJIMEYCIQDRtks2VT5ZA4BcEBJYCw0NPaiekH/iTuBtieVigfVw/QIhANem6Vp28k1z4Omm58aBPd0SjmTi5ulbCqGzZBnnQybNKpcDCEIQABoMMjIyMDQ4NTYzNDY4IgyB58O3+IVl6G/BZqMq9AIFvyPjPH4nI56e2dV8DxGhnLOGu6jomo1zAzn3dfFhllE7DN2QWl8c53/tAHlTef9fT3pl1OuXfFqt82zs7lhulcIYsaSv/MvgLWOEg0GfK4lONT2Bt97J4K2MUvBQPQ8eHxFc3Fn+TzLM22DxeHxa9TLbQy4SjJVBV5Jfyiu7/PJl7FOz4IBATgF4NgwVzuC+yHDl1ZABWac1TAWvAAJZiNOBCGfURng2qJ0rUIDbqTHkWOa6uXiw14DEEgQnVT7RbCVsG9RfiGXeCdFFvkknuscxZqoRFUVASyPW5KtxD7ybEQT5ybZedRbR+PzMNOFbAF3yYNyJXosJNqgBaJNmdGgE3mYRnKZ528dZEdyfQpFIs/gTUCdkkUAbQCLPZFNSc6YaiEHk8ox62UGoCqrvKUC6aiKbrJ8+rMFBHnH8cbJ1qw5xbh957Deg80EZLIy6qi/SkpSMTnB98bPIXzUfA5Je3ABZsPbg6NWnzDc3En0SM9kw6YX0oQY6pQGEwx4GEDBco370WnCvOA3jHy1DBz6l8rX2ItpVPP4+yx8dInp4Ef3wukNdBnJlPG6i3ku6u37TgJ2fN3iFVG+eV2rc3r/j9a+/ql0aj54NABUIyvu0fT2OLO80a3975J5iZxNS3QH7BCW3A84o7D2/VUytDEYvQ7GsUiNEIu3wT23dj3UrIfoaX6NJIUMt1Z3dykibdYYxjzxbRzKb5qp4n4LtO9A="
  },
  region: "us-east-1"
});


/***/ }),

/***/ "./handlers/ddb-doc-client.js":
/*!************************************!*\
  !*** ./handlers/ddb-doc-client.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ddbDocClient": () => (/* binding */ ddbDocClient)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/lib-dynamodb */ "@aws-sdk/lib-dynamodb");
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ddb_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ddb-client */ "./handlers/ddb-client.js");



const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: false,
  convertClassInstanceToMap: false
};
const unmarshallOptions = {
  wrapNumbers: false
};
const translateConfig = {
  marshallOptions,
  unmarshallOptions
};
const ddbDocClient = _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__.DynamoDBDocumentClient.from(_ddb_client__WEBPACK_IMPORTED_MODULE_2__.ddbClient, translateConfig);


/***/ }),

/***/ "@aws-sdk/client-dynamodb":
/*!*******************************************!*\
  !*** external "@aws-sdk/client-dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ "@aws-sdk/lib-dynamodb":
/*!****************************************!*\
  !*** external "@aws-sdk/lib-dynamodb" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/lib-dynamodb");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
/*!***********************************!*\
  !*** ./handlers/createProduct.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProduct": () => (/* binding */ createProduct)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ddb_doc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ddb-doc-client */ "./handlers/ddb-doc-client.js");
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/lib-dynamodb */ "@aws-sdk/lib-dynamodb");
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_3__);




const createProduct = async event => {
  const ProductsTableName = process.env.TABLE_NAME_PRODUCTS;
  const ProductsStockTableName = process.env.TABLE_NAME_PRODUCTS_STOCK;
  try {
    console.log(`createProduct: ${JSON.stringify(event.body)}`);
    const {
      body
    } = event;
    const {
      count,
      ...product
    } = body;
    const productId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
    const isValid = validateProduct(event.body);
    if (!isValid) {
      return {
        statusCode: 400,
        body: 'Product data is invalid'
      };
    }
    await _ddb_doc_client__WEBPACK_IMPORTED_MODULE_2__.ddbDocClient.send(new _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_3__.PutCommand({
      TableName: ProductsTableName,
      Item: {
        id: productId,
        ...product
      }
    }));
    await _ddb_doc_client__WEBPACK_IMPORTED_MODULE_2__.ddbDocClient.send(new _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_3__.PutCommand({
      TableName: ProductsStockTableName,
      Item: {
        product_id: productId,
        count
      }
    }));
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(productId)
    };
  } catch (error) {
    console.error(`createProduct, error: ${error}`);
    return {
      statusCode: 500,
      body: error ?? {
        message: 'Product was not created'
      }
    };
  }
};
function validateProduct(product) {
  if (!product.price || !product.count || !product.title || !product.description) {
    return false;
  }
  if (typeof product.price !== 'number' || typeof product.count !== 'number') {
    return false;
  }
  if (typeof product.title !== 'string' || typeof product.description !== 'string') {
    return false;
  }
  return true;
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=createProduct.js.map