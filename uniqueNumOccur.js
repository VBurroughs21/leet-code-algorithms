// https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function(arr) {
  var occurances = {}
  
  for(var i=0; i< arr.length; i++) {
    if(occurances[arr[i]]) {
      occurances[arr[i]]++
    } else {
      occurances[arr[i]] = 1
    }
  }

  var occurancesArray = Object.entries(occurances);

  console.log(occurancesArray);
  

  // for(var key = 0; key <= unquieNumCount; key++) {
  //   for(var secondKey = key; secondKey < unquieNumCount; secondKey++) {
      // if(key !== secondKey && occurances[key] === occurances[secondKey]) {
      //   return false;
      // }
  //   }
  // }
  for (var x = 0; x < occurancesArray.length; x++) {
    for (var y = x; y < occurancesArray.length; y++) {
      console.log(occurancesArray[x], occurancesArray[y]);
      
      if(occurancesArray[x][0] !== occurancesArray[y][0] && occurancesArray[x][1] === occurancesArray[y][1]) {
        return false;
      }
    }
  }
  return true;
};

// var uniqueOccurrences = function(arr) {
//   var occurance = []
// }

console.log(uniqueOccurrences([-3,0,1,0]))
