import angular from 'angular';

const ngHelloModule = angular.module('helloModule', []);

export const HelloComponent = {
  template: `<div>Angular: <input type="text" ng-model="$ctrl.message" ng-change="$ctrl.onMessageChange($ctrl.message)"></div>`,
  bindings: {
    message: '<',
    onMessageChange: '<'
  },
  controller: function () {
  }
};

ngHelloModule.component('helloComponent', HelloComponent);

export default ngHelloModule;
