(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('tobuycont', tobuycont)
        .controller('boughtcont', boughtcont)
        .service('listcheckservice', listcheckservice);

   

    function listcheckservice() {
        var service = this;
        var toBuyItems = [
            { name: "eggs", quantity: 12 },
            { name: "cheese", quantity: 1 },
            { name: "banana", quantity: 12 },
            { name: "washing powder", quantity: 1 },
            { name: "hair brush", quantity: 3 },
            { name: "tooth paste", quantity: 2 }
        
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }

    tobuycont.$inject = ['listcheckservice'];

    function tobuycont(listcheckservice) {
        var toBuyList = this;

        toBuyList.items = listcheckservice.getToBuyItems();

        toBuyList.buyItem = function(itemIndex) {
            listcheckservice.buyItem(itemIndex);
        };
    }

    boughtcont.$inject = ['listcheckservice'];

    function boughtcont(listcheckservice) {
        var alreadyBougthList = this;

        alreadyBougthList.items = listcheckservice.getAlreadyBoughtItems();
    }

  
})();
