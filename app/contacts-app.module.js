angular.module('contactsApp', [
    'ui.router'
])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                templateUrl: 'app/templates/home.html'
            });

    });