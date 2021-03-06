import ngHelloModule, {HelloComponent} from "./ng-hello-module";
import {angular2react} from 'angular2react'

let $injector;

angular
  .module(ngHelloModule.name)
  .run(['$injector', function (_$injector) {
    console.log('_$injector:', _$injector)

    $injector = _$injector
  }])


angular.bootstrap(document.createElement('div'), [ngHelloModule.name])

console.log('$injector:', $injector);

const NgComponentWrapper = angular2react('helloComponent', HelloComponent, $injector)

export default NgComponentWrapper;
