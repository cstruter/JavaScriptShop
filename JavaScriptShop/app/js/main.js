var CSTruterApp = angular
    .module('CSTruterApp', ['ngRoute', 'simple-paging'])
        .run
            (function ($rootScope, $location) {
                $rootScope.$on('$routeChangeSuccess', function (e, next, current) {
                    var _default = '/products';
                    var _path = (typeof next.$$route === 'undefined') ? _default : next.$$route.originalPath;
                    _path = (_path == '/products/:page') ? _default : _path;
                    $('ul.nav.navbar-nav li').removeClass('active');
                    $('ul.nav.navbar-nav a[href*="#' + _path + '"]').closest('li').addClass('active');
                });
            })
    .controller('ProductController',
        ['$scope', '$http', '$routeParams', 'Shop', ProductController])
    .controller('CartController',
        ['$scope', 'Shop', CartController]);