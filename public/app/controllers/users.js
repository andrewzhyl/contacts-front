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
        });

});

app.controller('UsersListCtrl', function($scope, Contact, Auth, $location) {
    $scope.PAGE = 'all';
    $scope.contacts = [{
        username: 'Macallan 12',
        price: 50
    }, {
        username: 'Chivas Regal Royal Salute',
        price: 10000
    }, {
        username: 'Glenfiddich 1937',
        price: 20000
    }];

    $scope.fields = ['username', 'email', 'phone_number'];

    $scope.sort = function(field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    }
    $scope.sort.field = 'username';
    $scope.sort.order = false;

    $scope.show = function(id) {
        $location.url('/contacts/' + id + '/edit');
    }

    $scope.delete = function(id) {
        if (confirm("Are you sure you want to delete this contact?")) {
            Contact.destroy({
                id: id
            }, function() {
                $location.url('/contacts')
            });
        }
    }
});
