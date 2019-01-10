import React, {Component} from 'react';
import angular from 'angular';
import ngHelloModule from './ng-hello-module';

class ReactHello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    }
  }

  onChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    return <div>
      React: <input type="text" value={this.state.message} onChange={this.onChange}/>
      <div ref="ngRoot"
           dangerouslySetInnerHTML={{__html: '<hello-directive message="message" on-message-change="onMessageChange"/>'}}/>
    </div>;
  }

  ngRootScope = null
  ngTimeout = null

  componentDidMount() {
    console.log('> componentDidMount');
    ngHelloModule.run(($rootScope, $timeout) => {
      console.log('ngHelloModule.run')
      this.ngRootScope = $rootScope;
      this.ngTimeout = $timeout;

      this.ngRootScope.message = this.state.message;
      this.ngRootScope.onMessageChange = (message) => {
        this.setState({
          message: message
        })
      }
    })

    const ngRoot = this.refs.ngRoot
    angular.bootstrap(ngRoot, [ngHelloModule.name])
  }

  componentWillUnmount() {
    console.log('> componentWillUnmount');
    this.ngRootScope.$destroy();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('> componentDidUpdate');
    if (prevState.message !== this.state.message) {
      this.ngTimeout(() => {
        this.ngRootScope.message = this.state.message;
      })
    }
  }

}


export default ReactHello;
