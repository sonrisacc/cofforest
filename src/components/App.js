
import React from 'react';
import BeanList from './BeanList';

class App extends React.Component {
  constructor({props}){
    super(props);
    this.state = {test: 'beans!'};

  };

  componentDidMount(){
    console.log('did mount');
  };

  componentWillMount(){
    console.log('willMount');
  };

  render() {
    return(
      <div className="App">
            <BeanList beans={this.props} />
      </div>
    );
  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;