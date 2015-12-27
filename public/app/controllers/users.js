var app = angular.module('ContactsApp.users', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('users', {
            url: '/users',
            views: {
                '': {
                    templateUrl: 'views/index.html'
                },
                'content@users': {
                    templateUrl: 'views/users/index.html',
                    controller: 'UsersListCtrl'
                },
                'navbar@users':{
                    templateUrl: 'views/users/_nav.html'
                }
            }

        });

});

app.controller('UsersListCtrl', ['$scope', function($scope, Contact, $location) {
    $scope.PAGE = 'all';
    $scope.contacts = [
        {
            username: 'Macallan 12',
            price: 50
        },
        {
            username: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            username: 'Glenfiddich 1937',
            price: 20000
        }
    ];


    //Contact.query();
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
}]);
