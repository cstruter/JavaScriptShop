function CartController ($scope, Shop) {
    $scope.products = Shop.Products();
    $scope.total = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += (items[i].quantity * items[i].price);
        }
        return total.toFixed(2);
    }
    $scope.clear = function (items) {
        for (var i = 0; i < items.length; i++) {
            items[i].InCart = false;
        }
    }
}