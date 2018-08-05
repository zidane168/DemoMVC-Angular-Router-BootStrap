module.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '/MyScript/views/main.html',
            controller: 'MainController'            
        });
});

