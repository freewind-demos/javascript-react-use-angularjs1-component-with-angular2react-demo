import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHello from './react-hello.jsx';

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.directive('helloDirective', function () {
    return {
        controller: function ($scope) {
            $scope.message = 'Hello';
        },
        template: `<div>
<div>Angular: <input type="text" ng-model="message"></div>
<div class="react-app"></div>
</div>`,
        link: function ($scope, $element, $attrs) {
            const reactRoot = $element[0].querySelector('.react-app');

            function onMessageChange(message) {
                $scope.message = message;
                $scope.$apply();
            }

            $scope.$watch('message', (message) => {
                ReactDOM.render(<ReactHello message={message} onMessageChange={onMessageChange}/>, reactRoot);
            })
        }
    }
});
