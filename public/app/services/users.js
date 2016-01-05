angular.module('ContactsApp.users')
    .factory('User', function($resource) {
        return $resource("/proxy/api/v1/users/:id", {
            id: "@id"
        }, {
            query: {
                isArray: true,
                method: 'GET',
                params: {},
                transformResponse: function(data) {
                    return angular.fromJson(data).users;
                }
            },
            get: {
                method: 'GET',
                params: {
                    id: '@id'
                },
                isArray: false,
                transformResponse: function(data, headers) {
                    return angular.fromJson(data).user;
                }
            },
            save: {
                method: 'POST'
            },
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            },
            destroy: {
                method: 'DELETE',
                params: {
                    id: '@id'
                },
            }
        });
    })
