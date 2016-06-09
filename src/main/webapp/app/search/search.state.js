(function() {
    'use strict';

    angular
        .module('carpoolingCsid2016App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('search', {
            parent: 'app',
            url: '/search/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/search/search.html',
                    controller: 'SearchController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('search');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
