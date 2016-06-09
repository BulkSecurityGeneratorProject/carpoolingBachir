(function() {
    'use strict';

    angular
        .module('carpoolingCsid2016App')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope', 'SearchService'];

    function SearchController ($scope, SearchService) {
        var vm = this;
    }
})();