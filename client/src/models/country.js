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
