var Amadeus = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'T77O6d5rqnBew0MDpWu9J98iuQKsO0AY',
  clientSecret: '3ZA30pmhIS6QLL2Q'
});

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-10-21',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});
