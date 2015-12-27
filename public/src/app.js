angular.module('ContactsApp', [
    'ui.router',
    'ngResource',
    'ngMessages',
    'LocalStorageModule',
    'ContactsApp.sessions',
    'ContactsApp.welcome',
    'ContactsApp.users',
    'ContactsApp.contacts'
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
}]);