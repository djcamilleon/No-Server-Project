angular.module('pokemon25',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

         $urlRouterProvider.otherwise('/')

         $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: '../views/search.html',
            controller: 'searchCtrl'
        })
        .state('resources', {
            url: '/resources',
            templateUrl: '../views/resources.html',
            controller: 'resourcesCtrl'
        })
        .state('about',{
            url: '/about',
            templateUrl: '../views/about.html',
            controller: 'aboutCtrl'
        })

    })