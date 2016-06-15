/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var BucketList = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./models/bucket_list.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var sampleCountries = __webpack_require__(2);
	var Country = __webpack_require__(3);
	
	window.onload = function(){
	  var bucketList = new BucketList();
	  for(country of sampleCountries){
	    bucketList.addCountry(new Country(country));
	  }
	  console.log(bucketList);
	
	}


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = [{"name": "Japan", "capital": "Tokyo", "population": 126865000, "relevance": 2.5}]


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Country = function(params){
	  this.name = params.name;
	  this.capital = params.capital;
	  this.population = params.population;
	  this.relevance = params.relevance;
	};
	
	Country.prototype = {
	  save: function(){
	
	  }
	}
	
	module.exports = Country;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map