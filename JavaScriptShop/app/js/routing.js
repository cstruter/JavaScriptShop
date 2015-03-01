CSTruterApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/products', {
            templateUrl: 'partials/products.html',
            controller: 'ProductController'
        }).
        when('/products/:page', {
            templateUrl: 'partials/products.html',
            controller: 'ProductController'
        }).
        when('/product/:id', {
            templateUrl: 'partials/product.html',
            controller: 'ProductController'
        }).
        when('/cart', {
            templateUrl: 'partials/cart.html',
            controller: 'CartController'
        }).
        otherwise({
            redirectTo: '/products'
        });
  }]);