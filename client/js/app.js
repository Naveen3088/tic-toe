/**
 * Main app module.
 *
 */
(function() {
    'use strict';

    angular.module('app', [
        // angular modules
        'ngAnimate',
        'ngSanitize',
        'ngMessages',
        'ngMaterial',

        // 3rd party modules
        'ui.router',

        'angular-loading-bar',
        'restangular',
        'LocalStorageModule',
        'ngFileUpload',
        'md.data.table',
        'googlechart',

        // app modules
        'app.core',
        'app.play'

    ]);

})();
