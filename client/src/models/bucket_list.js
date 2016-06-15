var BucketList = function() {
  this.countries = [];
}

BucketList.protoype = {
  addCountry: function(country) {
    this.countries.push(country);
  };
  // findCountry: function(term, value){
  //
  // }
}

module.exports = BucketList;
