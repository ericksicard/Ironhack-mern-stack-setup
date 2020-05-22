module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*Definition of some server-side configuration-related variables that\nwill be used in the code but should not be hardcoded as a best practice,\nas well as for security purposes.\nThese variables will give us the flexibility to change values from a single\nfile and use it across the backend code.*/\nconst config = {\n  env: \"development\" || false,\n  //To differentiate between development and production modes\n  port: process.env.PORT || 3000,\n  //To define the listening port for the server\n  jwtSecret: process.env.JWT_SECRET || \"Ironhackers\",\n  //The secret key to be used to sign JWT\n  mongoUri: process.env.MONGODB_URI || //The location of the MongoDB database instance for the project\n  process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/ironhack-mern-stack-setup'\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/config/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*This file contains the definitions of the controller methods that are used in the user route\ndeclarations as callbacks to be executed when a route request is received by the server.*/\n\n/*lodash is a JavaScript library that provides utility functions for common programming tasks,\nincluding the manipulation of arrays and objects.*/\n\n/*This controller makes use of the errorHandler helper to respond to route requests with meaningful\nmessages when a Mongoose error occurs.*/\n\n\n //Creating a new user\n\n/*When the Express app gets a POST request at '/api/users', it calls the create function.\nThis function creates a new user with the user JSON object that's received in the POST request from\nthe frontend within req.body. The call to user.save attempts to save the new user in the database after\nMongoose has performed a validation check on the data. Consequently, an error or success response is\nreturned to the requesting client.\nThe create function is defined as an asynchronous function with the async keyword, allowing us to use\nawait with user.save(), which returns a Promise. Using the await keyword inside an async function causes\nthis function to wait until the returned Promise resolves, before the next lines of code are executed.\nIf the Promise rejects, an error is thrown and caught in the catch block.\n*/\n\nconst create = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: 'Successfully signed up!'\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n}; //Listing all users\n\n/*The list controller function finds all the users from the database, populates only the name, email, created,\nand updated fields in the resulting user list, and then returns this list of users as JSON objects in an array\nto the requesting client.\n*/\n\n\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n}; //LOADING A USER BY ID TO READ, UPDATE, OR DELETE\n\n/*All three API endpoints for read, update, and delete require a user to be loaded from the database based on the\nuser ID of the user being accessed. We have to program the Express router to do this action first before responding\nto a specific request to read, update, or delete.*/\n//Loading\n\n/*Whenever the Express app receives a request to a route that matches a path containing the :userId parameter in it,\nthe app will execute the userByID controller function, which fetches and loads the user into the Express request object,\nbefore propagating it to the next function that's specific to the request that came in.\n*/\n\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n\n    if (!user) {\n      return res.status(400).json({\n        error: 'User not found'\n      });\n    }\n    /*If a matching user is found in the database, the user object is appended to the request object in the profile key.\n    Then, the next() middleware is used to propagate control to the next relevant controller function.*/\n\n\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: 'Could not retrieve user'\n    });\n  }\n}; //Reading\n\n/*When the Express app gets a GET request at '/api/users/:userId', it executes the userByID controller function to load the\nuser by the userId value, followed by the read controller function.\nThe read function retrieves the user details from req.profile and removes sensitive information, such as the hashed_password\nand salt values, before sending the user object in the response to the requesting client.\n*/\n\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n}; //Updating\n\n/*When the Express app gets a PUT request at '/api/users/:userId', it loads the user with the :userId parameter value before\nexecuting the update controller function.\nThe update function retrieves the user details from req.profile and then uses the lodash module to extend and merge the changes\nthat came in the request body to update the user data. Before saving this updated user to the database, the updated field\nis populated with the current date to reflect the last updated timestamp. Upon successfully saving this update, the updated\nuser object is cleaned by removing sensitive data, such as hashed_password and salt, before sending the user object in the\nresponse to the requesting client.\n*/\n\n\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    req.profile.hashed_password = undefined;\n    req.profile.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n}; //Deleting\n\n/*When the Express app gets a DELETE request at '/api/users/:userId', it loads the user by ID and then the remove controller\nfunction is executed.\nThe remove function retrieves the user from req.profile and uses the remove() query to delete the user from the database.\nOn successful deletion, the requesting client is returned the deleted user object in the response.\n*/\n\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/controllers/user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*In order to keep the development flow simple, we will initialize Webpack to compile\nthe client-side code when the server is run. In devBundle.js, it's set up a\ncompile method that takes the Express app and configures it to use the Webpack\nmiddleware to compile, bundle, and serve code, as well as enable hot reloading in\ndevelopment mode*/\n\n\n\n\n\nconst compile = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n/*bodyParser is a middleware to handle the complexities of parsing streamable request objects\nso that we can simplify browser-server communication by exchanging JSON in the request body*/\n\n\n/*Cookie parsing middleware to parse and set cookies in request objects.*/\n\n\n/*Compression middleware that will attempt to compress response bodies for all requests that\ntraverse through the middleware.*/\n\n\n/*Middleware to enable cross-origin resource sharing (CORS).*/\n\n\n/*Collection of middleware functions to help secure Express apps by setting various HTTP headers.*/\n\n\n\n\n //comment out before building for production !!!\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n/*In development mode, when this line is executed, Webpack will compile and bundle the React\ncode to place it in dist/bundle.js.*/\n\n_devBundle__WEBPACK_IMPORTED_MODULE_9__[\"default\"].compile(app); //comment out before building for production !!!\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()()); // Serving static files from the dist folder\n\n/*Webpack will compile client-side code in both development and production mode,\nthen place the bundled files in the dist folder. These two lines configure the\nExpress app to return static files from the dist folder when the requested route\nstarts with /dist.*/\n\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist'))); // Rendering the template at the root\n\n/*When the server receives a request at the root URL /, we will render template.js in the browser.*/\n\napp.get('/', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n});\n/*All routes and API endpoints need to be mounted on the Express app so that they can be\naccessed from the client-side.*/\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*The validation constraints that are added to the user schema fields will throw error\nmessages if they're violated when user data is saved to the database. To handle these\nvalidation errors and other errors that the database may throw when we make queries to it,\nwe define a helper method that will return a relevant error message that can be propagated\nin the request-response cycle as appropriate.\nThis method will parse and return the error message associated with the specific validation\nerror or other errors that can occur while querying MongoDB using Mongoose.\n*/\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) {\n        message = err.errors[errName].message;\n      }\n    }\n  }\n\n  return message;\n};\n/*Errors that are not thrown because of a Mongoose validator violation will contain an\nassociated error code. In some cases, these errors need to be handled differently. For\nexample, errors caused due to a violation of the unique constraint will return an\nerror object that is different from Mongoose validation errors. The unique option is\nnot a validator but a convenient helper for building MongoDB unique indexes, so we\nwill add another getUniqueErrorMessage method to parse the unique constraintrelated\nerror object and construct an appropriate error message.\n*/\n\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.chartAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/helpers/dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n/*The mongoose.Schema() function takes a schema definition object as a parameter to\ngenerate a new Mongoose schema object that will specify the properties or structure\nof each document in a collection.*/\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: Date\n});\n/*The password string that's provided by the user is not stored directly in the user\ndocument. Instead, it is handled as a virtual field.*/\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n/*To add validation constraints to the actual password string that's selected by the end user, we need\nto add custom validation logic and associate it with the hashed_password field in the schema.*/\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n/*These UserSchema methods are used to encrypt the user-provided password string into a hashed_password\nwith a randomly generated salt value. The hashed_password and the salt are stored in the user document\nwhen the user details are saved to the database on a create or update. Both the hashed_password and salt\nvalues are required in order to match and authenticate a password string provided during user sign-in using\nthe authenticate method.*/\n\nUserSchema.methods = {\n  /*This method is called to verify sign-in attempts by matching the user-provided\n  password text with the hashed_password stored in the database for a specific user.*/\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n\n  /*This method is used to generate an encrypted hash from the plain-text password and\n  a unique salt value using the crypto module from Node.*/\n  encryptPassword: function (password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n\n  /*This method generates a unique and random salt value using the current timestamp at\n  execution and Math.random().*/\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/models/user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n/*The user routes that are defined here will use express.Router() to define route paths\nwith the relevant HTTP methods and assign the corresponding controller function that\nshould be called when these requests are received by the server.\nWe will keep the user routes simplistic by using the following:\n    /api/users for the following:\n        - Listing users with GET\n        - Creating a new user with POST\n    /api/users/:userId for the following:\n        - Fetching a user with GET\n        - Updating a user with PUT\n        - Deleting a user with DELETE\n*/\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/*When the server receives requests at each of these defined routes, the corresponding\ncontroller functions are invoked. The functionality for each of these controller methods\nwill be defined and exported from the user.controller.js file.\n*/\n\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/users/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n // Express app to start a server that listens on the specified port for incoming requests\n\n_express__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, err => {\n  if (err) console.log(err);\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port);\n}); //Connecting the server to MongoDB\n\n/*Mongoose configuration to use native ES6 promises, and handles the connection to the\nMongoDB database.*/\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `<!doctype html>\n        <html lang=\"en\">\n            <head>\n                <meta charset=\"utf-8\">\n                <title>MERN Stack Setup</title>\n            </head>\n            <body>\n                <div id=\"root\"></div>\n                <script type=\"text/javascript\" src=\"/dist/bundle.js\">\n                </script>\n            </body>\n        </html>`;\n};\n\n/*When the server receives a request to the root URL, this HTML template will be\nrendered in the browser, and the div element with ID \"root\" will contain our React\ncomponent.*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/*Client-side Webpack configuration for development.\nThe client-side code of the application will be loaded in the browser from the bundled\ncode in bundle.js.*/\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n\n  /*mode sets process.env.NODE_ENV to the given value and tells Webpack\n  to use its built-in optimizations accordingly. If not set explicitly,\n  it defaults to a value of \"production\".*/\n  mode: \"development\",\n\n  /*devtool specifies how source maps are generated, if at all. Generally, a\n  source map provides a way of mapping code within a compressed file back\n  to its original position in a source file to aid debugging.*/\n  devtool: 'eval-source-map',\n\n  /*entry specifies the entry file where Webpack starts bundling, in this case\n  with the main.js file in the client folder.*/\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n\n  /*output specifies the output path for the bundled code, in this case set to\n  dist/bundle.js.*/\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    //publicPath allows specifying the base path for all assets in the application.\n    publicPath: '/dist/'\n  },\n\n  /*module sets the regex rule for the file extension to be used for transpilation,\n  and the folders to be excluded. The transpilation tool to be used here is\n  babel-loader.*/\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }]\n  },\n  plugins: [//HotModuleReplacementPlugin enables hot module replacement for react-hot-loader.\n  new webpack.HotModuleReplacementPlugin(), //NoEmitOnErrorsPlugin allows skipping emitting when there are compile errors\n  new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      //Webpack alias to point react-dom references to the @hotloader/react-dom version.\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /mnt/c/Users/esrfree/Desktop/SCHOOL/Ironhack/Projects/Ironhack-mern-stack-setup/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/extend\");\n\n//# sourceURL=webpack:///external_%22lodash/extend%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });