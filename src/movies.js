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

function dramaMoviesRate(arr) {
  var filter = arr.filter(function(movie) {
    return movie.genre.includes('Drama');
  });
  if (filter.length > 0 ) return ratesAverage(filter);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  var counter = 0;

  arr.forEach(function(movie) {
    if (movie.genre.includes('Drama') && movie.director === 'Steven Spielberg') {
      counter++;
    }
  })
  return 'Steven Spielberg directed ' + counter + ' drama movies!';
}


// Order by title and print the first 20 titles
/***WIP 
function orderAlphabetically (array) {
  var counter = 0
  if(counter<20)array.;
  counter++
}*/

// Best yearly rate average
