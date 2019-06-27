/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
  var totalRates = arr.reduce(function(accRates, movie) {
    accRates.push(movie.rate);
    return accRates;
  }, []);

  var sumRates = totalRates.reduce(function(accRates, rate) {
    return accRates + rate;
  }, 0); 

  var average = sumRates / totalRates.length;
  return parseFloat(average.toFixed(2));
}
 
// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
