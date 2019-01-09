import angular from 'angular';

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.directive('helloDirective', function () {
    return {
        scope: {
            message: '=',
            onMessageChange: '='
        },
        controller: function ($scope) {
            $scope.message = 'Hello';
            $scope.$watch('message', (message) => {
                $scope.onMessageChange(message);
            })
        },
        template: `<div>Angular: <input type="text" ng-model="message"></div>`
    }
});

export default ngHelloModule;
