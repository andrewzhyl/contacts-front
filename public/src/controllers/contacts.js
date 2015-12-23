var app = angular.module('ContactsApp')

app.controller('ListCtrl', function($scope, Contact, $location) {
    $scope.contacts = Contact.index();
    $scope.fields = ['username', 'email', 'phone_number'];

    $scope.sort = function(field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    }
    $scope.sort.field = 'username';
    $scope.sort.order = false;

    $scope.show = function(id) {
        $location.url('/contacts/' + id);
    }
})

app.controller('NewCtrl', function($scope, Contact, $location) {
    $scope.contact = new Contact()

    // function to submit the form after all validation has occurred            
    $scope.submitForm = function() {
        $scope.errors = {}

        function failure(response) {
            angular.forEach(response.data.errors, function(errors, field) {
                console.log(errors);
                $scope.errors[field] = errors.join(', ');
                $scope.newContact[field].$setValidity("server", false);
            });
        }

        // check to make sure the form is completely valid
        if ($scope.newContact.$valid) {
            console.dir($scope.contact);
            Contact.create({
                contact: $scope.contact
            }, function() {
                $location.url('/contacts')
            }, failure);
        }

    };
})
