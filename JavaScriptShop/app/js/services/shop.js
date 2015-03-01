CSTruterApp.factory('Shop',
    function () {
        return {
            data: [],
            HasData: $.Deferred(),
            Products: function (results) {
                if (typeof results !== 'undefined') {
                    this.data = angular.copy(results);
                    this.HasData.resolve(this.data);
                }
                return this.data;
            }
        };
    }
);