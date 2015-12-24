angular.module('ContactsApp', [
        'ngRoute',
        'ngResource',
        'ngMessages'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListCtrl',
                templateUrl: 'views/contacts/list.html'
            })
            .when('/contacts/new', {
                controller: 'NewCtrl',
                templateUrl: 'views/contacts/new.html'
            })
            .when('/contacts/:id/edit', {
                controller: "UpdateCtr",
                templateUrl: 'views/contacts/edit.html'
            });
        $locationProvider.html5Mode(true);
    });
