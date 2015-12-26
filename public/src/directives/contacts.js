angular.module('ContactsApp')
    .directive('serverError', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                return element.on('change', function() {
                    return scope.$apply(function() {
                        return ctrl.$setValidity('server', true);
                    });
                });
            }
        };
    })
    .directive('stringToNumber', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return '' + value;
                });
                ngModel.$formatters.push(function(value) {
                    return parseFloat(value, 10);
                });
            }
        };
    })
    .directive('userbar', ['$state', 'Auth', function($state, Auth, localStorageService) {
        return {
            restrict: 'E',
            templateUrl: 'views/directives/user_nav.html',
            link: function(scope, element, attrs) {
                scope.currentUser = Auth.currentUser();
                scope.logout = function() {
                    Auth.logout();
                    $state.go('login');
                }
            }
        };
    }]);
