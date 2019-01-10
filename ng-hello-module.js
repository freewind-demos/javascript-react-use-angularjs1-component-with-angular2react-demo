import angular from 'angular';

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.component('helloDirective', {
  template: `<div>Angular: <input type="text" ng-model="$ctrl.message" ng-change="$ctrl.onMessageChange($ctrl.message)"></div>`,
  bindings: {
    message: '=',
    onMessageChange: '='
  },
  controller: function () {
  }
});

export default ngHelloModule;
