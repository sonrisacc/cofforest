
import React from 'react';


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
      <h2>
         {this.state.test}
      </h2>
    );
  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;