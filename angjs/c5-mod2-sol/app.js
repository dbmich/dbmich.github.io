(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showToBuyList = this;
  showToBuyList.items = ShoppingListCheckOffService.toBuyItems;

  showToBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;
  showBoughtList.items = ShoppingListCheckOffService.boughtItems;
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var toBuyItems = [
    { name: "Espresso", quantity: "2 shots" },
    { name: "Bagels", quantity: "half dozen" },
    { name: "Eggs", quantity: "1 dozen" },
    { name: "Bacon", quantity: "2 lbs" },
    { name: "Juice", quantity: "2 cartons" }
  ];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.toBuyItems = toBuyItems;
  service.boughtItems = boughtItems;
}
})();