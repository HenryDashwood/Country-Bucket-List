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
