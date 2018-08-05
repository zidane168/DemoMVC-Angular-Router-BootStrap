


// var app = angular.module('app', ['ui.bootstrap', 'ui.router']);
var app = angular.module('app', [ 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/wwwroot/views/pages/account/login.html',
            controller: 'loginCtrl'
        })
        .state('Dashboard', {
            url: '/Dashboard',
            templateUrl: '/wwwroot/views/pages/ACS/Dashboard.html',
            controller: 'DashboardCtrl'
        })
              // Page 1: 
            .state('Dashboard.page1', {
                url: '/page1',
                templateUrl: '/wwwroot/views/pages/ACS/page1.html',
                controller: 'page1Ctrl'
            })

        // Page 2: 
        .state('Dashboard.page2', {
            url: '/page2',
            templateUrl: '/wwwroot/views/pages/ACS/page2.html',
            controller: 'page2Ctrl'
        })


    //.state('home.login', {
    //    url: '/login',
    //    templateUrl: '/wwwroot/views/login.html',
    //    controller: 'loginCtrl'


    //})

    //.state('about', {
    //    url: '/about',
    //    templateUrl: '/wwwroot/views/about.html'   
    //})
    //.state('admin', {
    //    url: '/admin',  
    //    templateUrl: '/wwwroot/views/admin.html'
    //})
    //.state('user', {
    //    url: '/user',
    //    templateUrl: '/wwwroot/views/user.html'
    //})
});


