angular.module('contactsApp')
    .controller('homeCtrl', function ($scope, contactRepository) {

        // set a default value
        $scope.contacts = [];

        // /!\ WARNING
        // in an ionic cache you may have trouble with cache
        // $scope.$on add an event listener
        // in this case we listen the display of the view, with or without cache
        //$scope.$on("$ionicView.enter", function(scopes, states) {

            // fetch the list from your api
            contactRepository.list()
                // now we have a promise instead of directly the data
                .then (function (response) {
                    // take a look at the response, you can find usefull informations
                    console.log('OK contactRepository.list', response);

                    // response is an http response object
                    $scope.contacts = response.data;
                })
                .catch (function (error) {
                    // take a look at the response, you can find usefull informations
                    console.error('KO contactRepository.list', error);
                });
        // });
    });
