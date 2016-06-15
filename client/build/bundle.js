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

	var BucketList = __webpack_require__(1);
	var Country = __webpack_require__(2);
	// var sampleCountries = require('./sample.json');
	
	window.onload = function(){
	  var bucketlist = new BucketList();
	  console.log(bucketlist);
	
	  var url1 = 'http://localhost:3000/bucketlist'
	  var request1 = new XMLHttpRequest();
	  request1.open("GET", url1);
	  request1.onload = function(){
	    if(request1.status === 200){
	      console.log("Got our list");
	      var sampleCountries = JSON.parse(request1.responseText);
	      for(country of sampleCountries){
	        bucketlist.addCountry(new Country(country));
	      };
	      console.log("first bucketlist", bucketlist);
	      updateDisplay(bucketlist);
	    }
	  }
	  request1.send(null)
	
	  var url2 = 'https://restcountries.eu/rest/v1';
	  var request = new XMLHttpRequest();
	  request.open('GET', url2);
	  request.onload = function() {
	    if(request.status === 200) {
	      console.log("got the data");
	      var jsonString = request.responseText;
	      // console.log(jsonString);
	      var countries = JSON.parse(jsonString);
	      // console.log(countries[0].name);
	      populateSelect(countries);
	    }
	  }
	  request.send(null);
	
	  var populateSelect = function(countries) {
	    var parent = document.getElementById('countries');
	    countries.forEach(function(item, index){
	      item.index = index;
	      var option = document.createElement("option");
	      option.value = index.toString();
	      option.text = item.name;
	      parent.appendChild(option);
	    });
	    parent.addEventListener("change", function(){
	      var index = this.value;
	      // console.log(index);
	      var country = countries[index];
	      // console.log(country)
	      updateDisplay(country);
	      bucketlist.addCountry(new Country(country))
	    });
	    // bucketlist.addCountry(new Country(country))
	  }
	
	  var updateDisplay = function(list) {
	
	    var newlist = list.countries;
	    console.log(newlist);
	    if(newlist.length > 0){
	        for(var country of newlist){
	        var our_list = document.getElementById('our_list');
	        var thisCountry = document.createElement('li');
	        //
	        thisCountry.innerText = "Country name: " + country.name + ", Capital City: " + country.capital + ", Country Population: " + country.population + " people, Country Relevance: " + country.relevance;
	        // thisCountry.innerText = "BLALALALLALALALAPOO";
	        our_list.appendChild(thisCountry);
	      }
	    }
	    else {
	      console.log("no countries");
	    }
	    // thisCountry.innerText = "Country name: " + country.name + ", Capital City: " + country.capital + ", Country Population: " + country.population + " people, Country Relevance: " + country.relevance;
	    // our_list.appendChild(thisCountry);
	    // var name = document.createElement('li');
	    // var capital = document.createElement('li');
	    // var population = document.createElement('li');
	    // var relevance = document.createElement('li');
	    // name.innerText = "Country Name: " + country.name;
	    // capital.innerText = "Capital City: " + country.capital;
	    // population.innerText = "Country Population: " + country.population;
	    // relevance.innerText = "Country Relevance: " + country.relevance;
	    // our_list.appendChild(name);
	    // our_list.appendChild(capital);
	    // our_list.appendChild(population);
	    // our_list.appendChild(relevance);
	
	  }
	
	  // updateDisplay(bucketlist.countries[0]);
	
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	var BucketList = function() {
	  this.countries = [];
	};
	
	BucketList.prototype = {
	  addCountry: function(country) {
	    this.countries.push(country);
	  }
	  // findCountry: function(term, value){
	  //
	  // }
	};
	
	module.exports = BucketList;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Country = function(params){
	  this.name = params.name;
	  this.capital = params.capital;
	  this.population = params.population;
	  this.relevance = params.relevance;
	};
	
	// Country.prototype = {
	//   save: function(){
	//
	//   }
	// }
	
	module.exports = Country;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map