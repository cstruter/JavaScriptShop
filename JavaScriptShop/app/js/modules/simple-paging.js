angular.module('simple-paging', []).filter('paging', function () {
    function PagedData(data, pageSize) {
        var currentPage = 0;

        this.numberOfPages = function () {
            return Math.ceil(data.length / pageSize);
        }

        this.pagedData = function (page) {
            currentPage = parseInt(page);
            var start = pageSize * currentPage;
            var end = pageSize * (currentPage + 1);
            return data.slice(start, end);
        }

        this.isMinPage = function () {
            return currentPage == 0;
        }

        this.isMaxPage = function () {
            return currentPage >= this.numberOfPages() - 1;
        }

        this.back = function () {
            if ((currentPage - 1) > 0)
                return currentPage - 1;
        }

        this.next = function () {
            if (this.isMaxPage()) return this.numberOfPages();
            return currentPage + 1;
        }
    }
    return function (input, pageSize, page) {
        input.paging = input.paging || new PagedData(input, pageSize);
        return input.paging.pagedData(page);
    }
});