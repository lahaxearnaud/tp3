angular.module('contactsApp')


    .provider('contactRepository', function () {
        // $http is a basic angular object.
        // You can checkout $http api in documentation
        // https://docs.angularjs.org/api/ng/service/$http

        /**
         * @param  {[type]} $http    angular http client
         * @param  {[type]} API_HOST your constant defined in app\contacts-app.constant.js
         */
        this.$get = function($http, API_HOST) {
            return {
                list: function () {
                    return $http.get(API_HOST + 'contacts');
                },
                find: function (id) {
                    return $http.get(API_HOST + 'contacts/' + id);
                },
                delete: function (id) {
                    return $http.delete(API_HOST + 'contacts/' + id);
                },
                create: function (data) {
                    return $http.post(API_HOST + 'contacts', $data);
                },
                update: function (id, data) {
                  return $http.put(API_HOST + 'contacts', $data);
                }
            }
        };
    });
