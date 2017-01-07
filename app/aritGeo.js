'use strict'

module.exports = function aritGeo(numbers){
  if (numbers.length<1){
  return 0
  }
  else {
    var difference = numbers[1] - numbers[0];
    var ratio = numbers[1] / numbers[0];
    var arithmetic = true;
    var geometric = true;

    for(var i = 0; i < numbers.length-1; i++)
    {
       if( numbers[i] + difference != numbers[i+1]){
          arithmetic = false;
          }
       if(numbers[i] * ratio != numbers[i+1]){
          geometric = false;
          }
    }
   if(arithmetic == true){
    return "Arithmetic";
    }
   else if(geometric == true){
    return "Geometric";
    }
   else {
    return -1
    }
  }
}