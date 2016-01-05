var app = angular.module('ContactsApp.sessions', ['ngRoute', 'LocalStorageModule'])

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('sessions', {
            templateUrl: 'views/sessions.html'
        })
        .state('sessions.login', {
            url: '/login',
            views: {
                'content@sessions': {
                    templateUrl: 'views/sessions/login.html',
                    controller: 'LoginCtrl'
                }
            }
        })
        .state('sessions.signup', {
            url: '/signup',
            views: {
                'content@sessions': {
                    templateUrl: 'views/sessions/signup.html',
                    controller: 'SignupCtrl'
                }
            }
        });
});

app.controller('LoginCtrl', function($scope, $location, $state, Auth) {
    $scope.user = {};

    $scope.login = function() {
        $scope.errors = {}

        if ($scope.loginForm.$valid) {
            $scope.errors = [];
            Auth.login($scope.user).success(function() {
                $state.go('welcome');
            }).error(function(response) {

                $scope.errors.password = response.error;
                $scope.loginForm.password.$setValidity("server", false);
            });
        }

    }
});


app.controller('SignupCtrl', function($scope, $location, $state, Auth) {
    $scope.user = {};

    function failure(response) {
        angular.forEach(response.errors, function(errors, field) {
            $scope.errors[field] = errors.join(', ');
            $scope.signupForm[field].$setValidity("server", false);
        });
    }

    $scope.signUp = function() {
        $scope.errors = {}

        if ($scope.signupForm.$valid) {
            Auth.register({
                user: $scope.user
            }).success(function() {
                $state.go('login');
            }).error(failure);

        }
    }
});
