'use strict'

module.exports = function findMinMax(numbers) {
	var Min_Max = []
	for (var i=0; i<numbers.length; i++) {
		var min=i;
		for (var j=i; j<numbers.length; j++) {
			if (numbers[min]>numbers[j]){
				min=j;
			}
		}
	var temp = numbers[min];
	numbers[min]=numbers[i];
	numbers[i] = temp;	
	}
    if (numbers[0] == numbers[numbers.length-1]){
    Min_Max=[numbers[0]];
    }
    else {
    Min_Max=[numbers[0],numbers[numbers.length-1]]
    }
    return Min_Max 
}