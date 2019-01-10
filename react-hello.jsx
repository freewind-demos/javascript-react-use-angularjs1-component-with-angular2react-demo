import React, {Component} from 'react';
import NgComponentWrapper from './ng-component-wrapper';

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

  onAngularMessageChange = (message) => {
    console.log('onAngularMessageChange')
    this.setState({
      message: message
    });
  }

  render() {
    return <div>
      React: <input type="text" value={this.state.message} onChange={this.onChange}/>
      <NgComponentWrapper message={this.state.message} onMessageChange={this.onAngularMessageChange}/>
    </div>;
  }

}

export default ReactHello;
