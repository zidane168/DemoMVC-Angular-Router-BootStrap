


// var app = angular.module('app', ['ui.bootstrap', 'ui.router']);
var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/wwwroot/views/pages/account/Dashboard.html',
            controller: 'loginCtrl'
        })
        .state('Dashboard', {
            url: '/Dashboard',
            templateUrl: '/wwwroot/views/pages/ACS/Dashboard.html',
            controller: 'DashboardCtrl'
        })
            // Page 1: 
        .state('Pages.control', {
            url: '/control',
            templateUrl: '/wwwroot/views/pages/ACS/control.html',
            controller: 'ControlCtrl'
        })



  
});


