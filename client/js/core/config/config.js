/**
 * Core configuration.
 *
 */
(function() {
    'use strict';

    /* @ngInject */
    function onConfig(cfpLoadingBarProvider, $urlRouterProvider, $locationProvider, $mdDateLocaleProvider, localStorageServiceProvider, RestangularProvider, SERVER_API_URL) {

        cfpLoadingBarProvider.includeSpinner = false;

        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('DD-MMM-YYYY');
        };
        // use "ionic-photo-gallery" as a localStorage name prefix so app doesn’t accidently read data from another app using the same variable names
        localStorageServiceProvider.setPrefix('quotation-medverve');

        // set material design template
        //$mdThemingProvider.theme('default')
        //    .primaryPalette('teal')
        //    .accentPalette('brown')
        //    .warnPalette('deep-orange');

        /*********************************************************************
         * Route provider configuration based on these config constant values
         *********************************************************************/
        //set restful base API Route
        RestangularProvider.setBaseUrl(SERVER_API_URL);

        // set the `id` field to `_id`
        RestangularProvider.setRestangularFields({
            id: '_id'
        });

        $urlRouterProvider.otherwise('/play');
        // $locationProvider.html5Mode(true);
    }

    /* @ngInject */
        function onRun($rootScope, $state, Authentication) {

        angular.element(document).ready(function() {
                // save user profile details to $rootScope
              /*  $rootScope.me = Authentication.getCurrentUser();

                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
*/
            $rootScope.$on('$stateChangeStart', function(event, toState) {
                     //$location.path('/#/signin');
                if (toState.data.authenticate && !Authentication.isAuthenticated()) {
                        console.log('No authorized!');
                        $state.transitionTo("signin");
                        event.preventDefault();
                        //$location.path('/signin');
                    }
                });
        });
        }
    
    angular
        .module('app.core')
        .config(['cfpLoadingBarProvider', '$urlRouterProvider', '$locationProvider', '$mdDateLocaleProvider', 'localStorageServiceProvider', 'RestangularProvider', 'SERVER_API_URL', onConfig])
        //.run(onRun)
        .constant('SERVER_API_URL', 'http://192.168.0.181:13000'); //192.168.0.100 - 172.20.10.3 127.0.0.1
})();
