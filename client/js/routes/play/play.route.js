(function(){

'use strict';

    function playRoute($stateProvider) {
        $stateProvider.state('play', {
            url: '/play',
            templateUrl: '/js/routes/play/play.html',
            controller: 'playCtrl'
        });
    }

    angular.module('app.play')
        .config(['$stateProvider', playRoute]);

})();
