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

app.directive('stringToNumber', function() {
  return {
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
});