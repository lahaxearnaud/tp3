angular.module('contactsApp')

    /**
     * <mail-to></mail-to>
     *
     */
    .directive('mailTo', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/mail-to.html',
            scope: {
                'email': '=',
                'name' : '='
            },
            link: function(scope) {
                console.log('FROM MY DIRECTIVE', scope);
            }
        };
    });