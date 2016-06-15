var BucketList = require('./models/bucket_list.js');
var sampleCountries = require('./sample.json');
var Country = require('./models/country.js');

window.onload = function(){
  var bucketList = new BucketList();
  for(country of sampleCountries){
    bucketList.addCountry(new Country(country));
  }
  console.log(bucketList);

}
