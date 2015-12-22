angular.module('ContactsApp')
    .factory('Contact', function($resource) {
        return $resource("/proxy/api/v1/contacts/:id", {
            id: "@id"
        }, {
            'create': {
                method: 'POST'
            },
            'index': {
                method: 'GET',
                isArray: true,
                transformResponse: function(data, headers) {
                    return angular.fromJson(data).contacts;
                }
            },
            'show': {
                method: 'GET',
                isArray: false
            },
            'update': {
                method: 'PUT'
            },
            'destroy': {
                method: 'DELETE'
            }
        });
    })
