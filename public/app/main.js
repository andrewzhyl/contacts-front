require.config({

    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
        'angular': 'lib/angular/angular.min',
        'angularRoute': 'lib/angular-route/angular-route',
        'uiRouter': 'lib/angular-ui-router/release/angular-ui-router.min',
        'angularResource': 'lib/angular-resource/angular-resource.min',
        'angularMessages': 'lib/angular-messages/angular-messages.min',
        'angularLocalStorage': 'lib/angular-local-storage/dist/angular-local-storage.min',
        'app': 'app/app.js',
        'sessions': 'app/controllers/sessions.js',
        'welcome': 'app/controllers/welcome',
        'app': 'app/controllers/contacts',
        'app': 'app/controllers/users',
        'app': 'app/services/contacts',
        'app': 'app/services/auth',
        'app': 'app/directives/contacts',
        'app': 'app/filters/contacts'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    }
})