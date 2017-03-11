angular.module('contactsApp')

    .provider('contactRepository', function () {

        var contacts = [
            {
                "name": "Jan SalINAS",
                "company": "EQUICOM",
                "email": "jansalinas@equicom.com"
            },
            {
                "name": "Lola FrANks",
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

        this.$get = function() {
            return {
                list: function () {
                    return contacts;
                },
                find: function (id) {
                    return contacts[id];
                },
                delete: function (id) {
                    delete contacts[id];
                },
                create: function (data) {
                    // just for demo
                    var id = (Math.random() + '').replace('0.', '');
                    contacts[id] = data;
                },
                update: function (id, data) {
                    contacts[id] = data;
                }
            }
        };
    });