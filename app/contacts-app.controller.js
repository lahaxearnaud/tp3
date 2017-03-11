angular.module('contactsApp')
    .controller('homeCtrl', function ($scope, contactRepository) {

        $scope.contacts = contactRepository.list();

    });