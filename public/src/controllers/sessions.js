var app = angular.module('ContactsApp.sessions', ['ngRoute', 'LocalStorageModule'])

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/sessions/login.html',
            controller: 'LoginCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/sessions/signup.html',
            controller: 'SignupCtrl'
        });
});

// .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//     $routeProvider.when('/login', {
//         templateUrl: 'views/sessions/login.html',
//         controller: 'LoginCtrl'
//     });
//     $locationProvider.html5Mode(true);
// }])

app.controller('LoginCtrl', function($rootScope, $scope, $location, $state, Auth) {
    $scope.user = {};

    $scope.login = function() {
        $scope.errors = {}

        // function failure(response) {
        //     angular.forEach(response.data.errors, function(errors, field) {
        //         console.log(errors);
        //         $scope.errors[field] = errors.join(', ');
        //         $scope.newContact[field].$setValidity("server", false);
        //     });
        // }

        if ($scope.loginForm.$valid) {
            $scope.errors = [];
            Auth.login($scope.user).success(function() {
                $rootScope.currentUser = Auth.currentUser();
                $state.go('welcome');
            }).error(function(response) {
                console.log('-------');
                console.log(response);

                $scope.errors.password = response.error;
                $scope.loginForm.password.$setValidity("server", false);
            });
        }

    }
})

// angular.module('ContactsApp.signup', ['ngRoute'])

// .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//     $routeProvider.when('/signup', {
//         templateUrl: 'views/sessions/signup.html',
//         controller: 'SignupCtrl'
//     });
//     $locationProvider.html5Mode(true);
// }])

.controller('SignupCtrl', [function($scope, $location) {

}]);
