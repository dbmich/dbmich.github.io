(function () {
'use strict';

angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.checkLunchMessage = "";
  $scope.borderstyle = "";

  $scope.CheckLunch = function() {
    if ($scope.lunchMenu == "") {
      $scope.checkLunchMessage = "Please enter data first";
      $scope.color = "red";
      $scope.bordercolor = "solid 2px red";
    } else {
      //set up .replace option. g flag finds all rather than just first match      
      var findThis = /,\s*,/g;

      //.replace removes any possible white space between separators, 
      //    as well as removing any 'null' items in the lunch list
      //.split iterates through lunchMenu giving array of items
      var lunchList = $scope.lunchMenu.replace(findThis, ',').split(',');
      $scope.checkLunchMessage = checkLunchSize(lunchList.length);
      $scope.bordercolor = "solid 2px green";
    }
  }

  function checkLunchSize(size) {
    var respond = "";
    switch (size) {
      case 1:
      case 2:
      case 3:
        respond = size + " item(s) - Enjoy!";
        $scope.color = "green";
        break;
      default:
        respond = size + " items?" + " Too Much!";
        $scope.color = "red";
        break;
    }
    return respond;
  }
}

})();