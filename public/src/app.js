angular.module('ContactsApp', [
        'ngRoute',
        'ngResource'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListCtrl',
                templateUrl: 'views/list.html'
            })
            .when('/contacts/new', {
                controller: 'NewCtrl',
                templateUrl: 'views/new.html'
            });
        $locationProvider.html5Mode(true);
    });
