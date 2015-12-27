'use strict';

angular.module('ContactsApp.welcome', ['ui.router', 'ContactsApp.users'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            views: {
                '': {
                    templateUrl: 'views/admin.html'
                },
                'content@welcome': {
                    templateUrl: 'views/welcome/index.html',
                    controller: 'WelcomeCtrl'
                }
            }

        });
})


.controller('WelcomeCtrl', function($rootScope, $scope) {

});
