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


// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_1__.DynamoDBClient({
  apiVersion: "latest",
  credentials: {
    accessKeyId: "ASIATHMZAGEGJM4CYJJ5",
    secretAccessKey: "0b1ogK3ELxXPUz4Y2d7k5hFQqq3ZIK0uFce36uqb",
    sessionToken: "IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJHMEUCIQCkvX9D3/V7AdmyhmR3drCjR6PCPkOy+rUgKGdC5vB1zAIgdK9jc5/E1HJXdJfzXGJHzg5ydS3McUHk0o7V//QVOSgqoAMI7P//////////ARAAGgwyMjIwNDg1NjM0NjgiDGUjWD0mmKOOmlSD6Sr0AiRBr81jBg5xx9XKXilwcaPJygNHfUEnkmpeGZseTsiV7rggR8U6eyIERYWL551/GT2tnN9C4YUBkZOoXL5xr8Is2XIT0lyxNy8Do7jhVMZZC+KaD2kFe6v0vDS7fBReqgNAyVVXmZMaIFrM69bjwGFWBSL6Q3SQNO3cMSpdwn54JmVP2yiU0iTafCBqT4lcpbLtrzcOASk53JRB1qv8FwPpRox5bCdb9dq/J0xxulbdzqXFidfYRuewMKH1VtO+4fWm2IadrlR/bMqnqvTbOEEoIyQVYsOj6fZAKj2SEnMHKBJY7g7Va44fwuCAqtVmNR6r+SG7wiALECbMPCzrrgsyOrSjliKgYN5+oTNZYrcaPQxjJ4V1P0ZeGndw/FnV2M8eT/X9pCeBMuxu8OirBsgDQUBO/qmLiwxi23x3hEkZDszH94fzI5vz1sa9epTfdfa7c5i4Z8Gr/jRsEMm4/V550B6cXmXvtI1rdZvCuAXKVD5z6zCe2uShBjqmAR2XBj5DCq2t+PmlKTLrGRaERMDYiK407KctgC4j6P0tGXdkJ6LxPpPzO0PC1qV2qOoLoFE+7yeIj5U9Gkimv0lnvFo7RsELqLPWcGsq3+cb3fAJyYttmWwBYaimcDXwDIR4flSlMlPadjG15xRO+sh0GFDiYvkg3EhYVLy5OlK/io057ozNrkUTz0n2pc8rYiIDZSoO/EHKN178DrbgbmSHae6YpUo="
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
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false,
  // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false,
  // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false // false, by default.
};

const translateConfig = {
  marshallOptions,
  unmarshallOptions
};

// Create the DynamoDB Document client.
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
/*!*************************************!*\
  !*** ./handlers/getProductsById.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductsById": () => (/* binding */ getProductsById)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ddb_doc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ddb-doc-client */ "./handlers/ddb-doc-client.js");
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/lib-dynamodb */ "@aws-sdk/lib-dynamodb");
/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__);



const getProductsById = async event => {
  const ProductsTableName = process.env.TABLE_NAME_PRODUCTS;
  const ProductsStockTableName = process.env.TABLE_NAME_PRODUCTS_STOCK;
  try {
    const productId = event.pathParameters.productId;
    const product = (await _ddb_doc_client__WEBPACK_IMPORTED_MODULE_1__.ddbDocClient.send(new _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__.GetCommand({
      TableName: ProductsTableName,
      Key: {
        id: productId
      }
    }))).Item;
    const productStockCount = (await _ddb_doc_client__WEBPACK_IMPORTED_MODULE_1__.ddbDocClient.send(new _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_2__.GetCommand({
      TableName: ProductsStockTableName,
      Key: {
        product_id: productId
      }
    }))).Item.count;
    if (!product && !productStockCount) {
      throw new Error('Product was not found');
    }
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify({
        ...product,
        count: productStockCount
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error ?? {
        message: 'Request for product id is invalid'
      }
    };
  }
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=getProductsById.js.map