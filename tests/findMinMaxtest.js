'use strict';

 var chai = require('jasmine');

 var findMinMax = require('../app/findMinMax.js');

(function() {

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [213,546] for [100, 456, 243 , 213, 512, 546]', function () {
        expect(findMinMax([100, 456, 243 , 213, 512, 546])).toEqual([100,546]);
      });

      it('should return [0,34] for [34, 13, 0,1, 4, 10, 4]', function () {
        expect(findMinMax([34, 13, 0,1, 4, 10, 4])).toEqual([0,34]);
      });

      it('should return [0.4,30.27] for [7.5,1.3,21.4,2.3,30.26,30.27,0.4]', function () {
        expect(findMinMax([7.5,1.3,21.4,2.3,30.26,30.27,0.4])).toEqual([0.4,30.27]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-34, -7] for [-15,-13,-34,-7,-23]', function(){
        expect(findMinMax([-15,-13,-34,-7,-23])).toEqual([-34, -7]);
      })

      it ('should return [-14, 78] for [3,6,40,-14,-4,78,30]', function(){
        expect(findMinMax([3,6,40,-14,-4,78,30])).toEqual([-14, 78])
      })

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [13] for [13, 13, 13, 13]', function () {
        expect(findMinMax([13, 13, 13, 13])).toEqual([13]);
      });

    });

  });

})();