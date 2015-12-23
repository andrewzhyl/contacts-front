var app = angular.module('ContactsApp')
app.directive('serverError', function() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attrs, ctrl) {
      return element.on('change', function() {
        return scope.$apply(function() {
          return ctrl.$setValidity('server', true);
        });
      });
    }
  };
});