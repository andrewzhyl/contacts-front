var app = angular.module('ContactsApp.users', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('users', {
            templateUrl: 'views/admin.html'
        })
        .state('users.list', {
            url: '/users',
            views: {
                'content@users': {
                    templateUrl: 'views/users/list.html',
                    controller: 'UsersListCtrl'
                },
                'navbar@users': {
                    templateUrl: 'views/users/_nav.html'
                }
            }
        })
        .state('users.new', {
            url: '/users/new',
            views: {
                'content@users': {
                    templateUrl: 'views/users/new.html',
                    controller: 'UsersNewCtrl'
                },
                'navbar@users': {
                    templateUrl: 'views/users/_nav.html'
                }
            }
        })
        .state('users.edit', {
            url: '/users/:id/edit',
            views: {
                'content@users': {
                    templateUrl: 'views/users/edit.html',
                    controller: 'UsersUpdateCtr'
                },
                'navbar@users': {
                    templateUrl: 'views/users/_nav.html'
                }
            }
        });

});

app.controller('UsersListCtrl', function($scope, User, Auth, $location) {
    $scope.PAGE = 'all';
    $scope.users = User.query();

    $scope.fields = ['username', 'email'];

    $scope.sort = function(field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    }
    $scope.sort.field = 'username';
    $scope.sort.order = false;

    $scope.show = function(id) {
        $location.url('/users/' + id + '/edit');
    }

    $scope.delete = function(id) {
        if (confirm("Are you sure you want to delete this user?")) {
            User.destroy({
                id: id
            }, function() {
                $location.url('/users')
            });
        }
    }
});

app.controller('UsersNewCtrl', function($scope, User, $location) {
    $scope.PAGE = 'new';
    $scope.user = new User()

    // function to submit the form after all validation has occurred            
    $scope.submitForm = function() {
        $scope.errors = {}

        function failure(response) {
            angular.forEach(response.data.errors, function(errors, field) {
                console.log(errors);
                $scope.errors[field] = errors.join(', ');
                $scope.newUser[field].$setValidity("server", false);
            });
        }

        if ($scope.newUser.$valid) {
            console.dir($scope.user);
            User.save({
                user: $scope.user
            }, function() {
                $location.url('/users')
            }, failure);
        }
    };
});

app.controller('UsersUpdateCtr', function($scope, User, $stateParams, $location) {
    $scope.user = User.get({
        id: $stateParams.id
    })
    $scope.formsValid = false;
    $scope.submitForm = function() {
        $scope.errors = {}

        function failure(response) {
            angular.forEach(response.data.errors, function(errors, field) {
                console.log(errors);
                $scope.errors[field] = errors.join(', ');
                $scope.newUser[field].$setValidity("server", false);
            });
        }

        if ($scope.newUser.$valid) {
            console.dir($scope.user);
            User.update({
                id: $scope.user.id,
                user: $scope.user
            }, function() {
                $location.url('/users')
            }, failure);
        }

    };
});
