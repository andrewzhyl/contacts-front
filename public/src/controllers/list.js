angular.module('ContactsApp')
    .controller('ListController', function($scope, Contact) {
        $scope.contacts = Contact.index();
        $scope.fields = ['first_name', 'last_name'];

        $scope.sort = function(field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        }
        $scope.sort.field = 'first_name';
        $scope.sort.order = false;
    })
