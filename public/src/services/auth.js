angular.module('ContactsApp')
    .factory('AuthInterceptor', function($q, $injector) {
        return {
            request: function(config) {
                var localStorageService = $injector.get('localStorageService');
                var token;

                if (localStorageService.get('auth_token')) {
                    token = localStorageService.get('auth_token');
                }

                if (token) {
                    config.headers.Authorization = token; //'Bearer ' + token;
                }

                return config;
            },
            responseError: function(response) {
                var localStorageService = $injector.get('localStorageService');
                // TODO: revisit for the 403
                if (response.status === 401 || response.status === 403) {
                    localStorageService.remove('auth_token');
                    $injector.get('$state').go('login');
                }

                return $q.reject(response);
            }
        }
    }).config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    });

angular.module('ContactsApp').factory("Auth", function($rootScope, $http, localStorageService) {
    return {
        isAuthenticated: function() {
            return localStorageService.get('auth_token');
        },
        login: function(credentials) {
            var login = $http.post('/proxy/api/v1/auth/login', credentials);
            login.success(function(result) {
                localStorageService.set('auth_token', result.token);
                var user = {
                    id: result.user.id,
                    username: result.user.username
                        // avatarUrl: result.avatarUrl
                }
                localStorageService.set('user', JSON.stringify(user));
            });

            return login;
        },
        register: function(formData) {
            localStorageService.remove('auth_token');
            var register = $http.post('/proxy/api/v1/auth/signup', formData);
            register.success(function(result) {
                localStorageService.set('auth_token', result.token);
            });

            return register;
        },
        logout: function() {
            localStorageService.remove('auth_token');
            localStorageService.remove('user');
        },
        currentUser: function() {
            return JSON.parse(localStorageService.get('user'));
        }

    }
});
