angular.module('contactsApp')
    .controller('homeCtrl', function ($scope) {

        $scope.contacts = [
            {
                "name": "Jan Salinas",
                "company": "EQUICOM",
                "email": "jansalinas@equicom.com"
            },
            {
                "name": "Lola Franks",
                "company": "ANOCHA",
                "email": "lolafranks@anocha.com"
            },
            {
                "name": "Kay Montoya",
                "company": "XINWARE",
                "email": "kaymontoya@xinware.com"
            },
            {
                "name": "Adkins Henson",
                "company": "COMBOGEN",
                "email": "adkinshenson@combogen.com"
            }
        ];

    });