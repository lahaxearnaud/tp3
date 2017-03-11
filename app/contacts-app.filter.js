angular.module('contactsApp')

    .filter('capitalize', function () {
        return function(input) {
            input = input || '';

            if (!angular.isString(input)) {
                return input;
            }

            return input.replace(/(\w\S*)?/g, function(word){
                    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
            });
        };
    });