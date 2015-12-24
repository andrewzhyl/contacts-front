var app = angular.module('ContactsApp')

app.controller('ListCtrl', function($scope, Contact, $location) {
    $scope.PAGE = 'all';
    $scope.contacts = Contact.query();
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
})

app.controller('NewCtrl', function($scope, Contact, $location) {
    $scope.PAGE = 'new';
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

        if ($scope.newContact.$valid) {
            console.dir($scope.contact);
            Contact.save({
                contact: $scope.contact
            }, function() {
                $location.url('/contacts')
            }, failure);
        }
    };
})

app.controller('UpdateCtr', function($scope, Contact, $routeParams, $location) {
    $scope.contact = Contact.get({
        id: $routeParams.id
    })
    $scope.formsValid = false;
    $scope.submitForm = function() {
        $scope.errors = {}

        function failure(response) {
            angular.forEach(response.data.errors, function(errors, field) {
                console.log(errors);
                $scope.errors[field] = errors.join(', ');
                $scope.newContact[field].$setValidity("server", false);
            });
        }

        if ($scope.newContact.$valid) {
            console.dir($scope.contact);
            Contact.update({
                id: $scope.contact.id,
                contact: $scope.contact
            }, function() {
                $location.url('/contacts')
            }, failure);
        }

    };
})
