(function() {
    'use strict';

    angular
        .module('carpoolingCsid2016App')
        .factory('SearchService', SearchService);

    SearchService.$inject = ['$filter', '$http', '$scope'];

    function SearchService ($filter, $http, $scope) {
        var service = {
            depart: $scope.form.depart,
            arrivee: $scope.form.arrivee,
        };

        return service;
    }
})();
