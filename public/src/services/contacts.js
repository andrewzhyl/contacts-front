angular.module('ContactsApp')
    .factory('Contact', function($resource) {
        return $resource("/proxy/api/v1/contacts/:id", {
            id: "@id"
        }, {
            query: {
                isArray: true,
                method: 'GET',
                params: {},
                transformResponse: function(data) {
                    return angular.fromJson(data).contacts;
                }
            },
            get: {
                method: 'GET',
                params: {
                    id: '@id'
                },
                isArray: false,
                transformResponse: function(data, headers) {
                    return angular.fromJson(data).contact;
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
            delete: {
                method: 'DELETE',
                params: {}
            }

        });
    })
