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

    // $routeProvider.otherwise({
    //     redirectTo: '/login'
    // });

    // $urlRouterProvider.otherwise('/login');

    $locationProvider.html5Mode(true);
}]);


// angular.module('ContactsApp', [
//     'ngRoute',
//     'ngResource',
//     'ngMessages',
//     'ContactsApp.login',
//     'ContactsApp.signup',
//     'ContactsApp.contacts'
//     // 'ContactsApp.users'
// ]).config(['$routeProvider', function($routeProvider) {

//     // $routeProvider.otherwise({
//     //     redirectTo: '/login'
//     // });

// }]);


// angular.module('ContactsApp.signup', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/login', {
//         templateUrl: 'views/sessions/login.html',
//         controller: 'LoginCtrl'
//     });
// }])

// .controller('LoginCtrl', [function() {

// }]);

// var app = angular.module('ContactsApp', [
//     'ui.router',
//     'ngResource',
//     'ngMessages'
// ]);

// // app.run([
// //     '$rootScope', '$location', 'Auth',
// //     function($routeProvider, $location, Auth) {

// //         function afterSignIn(event, next, current) {
// //             if (next.access !== void 0 && !Auth.isAuthorized(next.access.requiredPermissionsAnyOf)) {
// //                 if (next.templateUrl === 'expenses/expenses.html' && Auth.isAuthenticated() !== null) {
// //                     $location.path('/users');
// //                 } else if (next.templateUrl === 'expenses/expenses.html' && Auth.isAuthenticated() === null) {
// //                     $location.path('/login');
// //                 } else {
// //                     $location.path('/');
// //                 }
// //             }
// //         }

// //         $routeProvider.$on('$routeChangeStart', afterSignIn);
// //     }
// // ])



// app.config(function($routeProvider, $locationProvider) {

//     $routeProvider
//         .when('/signup', {
//             templateUrl: 'views/sessions/signup.html',
//             controller: 'SignupCtrl'
//         })
//         .when('/login', {
//             templateUrl: 'views/sessions/login.html',
//             controller: 'LoginCtrl'
//         })
//         .when('/contacts', {
//             controller: 'ListCtrl',
//             templateUrl: 'views/contacts/list.html'
//         })
//         .when('/contacts/new', {
//             controller: 'NewCtrl',
//             templateUrl: 'views/contacts/new.html'
//         })
//         .when('/contacts/:id/edit', {
//             controller: "UpdateCtr",
//             templateUrl: 'views/contacts/edit.html'
//         });
//     $locationProvider.html5Mode(true);
// });


// app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

//     // $urlRouterProvider.otherwise('/login');

//     $stateProvider
//         .state('sessions', {
//             url: '/login',
//             templateUrl: 'views/sessions/login.html'
//         })
//         .state('sessions.signup', {
//             url: '/signup',
//             templateUrl: 'views/sessions/signup.html'
//         })
//         .state('contacts', {
//             url: '/contacts',
//             controller: 'ListCtrl',
//             templateUrl: 'views/contacts/list.html'
//         })
//         .state('contacts.new', {
//             url: '/contacts/new',
//             controller: 'NewCtrl',
//             templateUrl: 'views/contacts/new.html'
//         })
//         .state('contacts.edit', {
//             url: '/contacts/:id/edit',
//             controller: "UpdateCtr",
//             templateUrl: 'views/contacts/edit.html'
//         });



//     $locationProvider.html5Mode(true);
// });
