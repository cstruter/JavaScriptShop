function ProductController($scope, $http, $routeParams, Shop) {
    $scope.page = $routeParams.page || 0;
    $scope.products = Shop.Products();
    Shop.HasData.done(function (products) {
        if (typeof $routeParams.id !== 'undefined') {
            $scope.product = $.grep(products, function (product) {
                return product.id == $routeParams.id;
            })[0];
        }
    });
    if ($scope.products.length == 0) {
        $http.get('json/products.json').success(function (data) {
            $scope.products = Shop.Products(data);
        });
    }
}