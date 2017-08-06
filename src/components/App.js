
import React from 'react';
import BeanList from './BeanList';
import axios from 'axios';
import beanData from '../exampleBeanData';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test: {coffeeBeans:[]},
      beans: this.props.initialBeans
    };

  };

  componentDidMount(){

    axios.get('/main')
      .then(res => {
      console.log('didMoutRes',res.data);
        this.setState({
          test: {coffeeBeans: res.data.test}
        });
      })
      .catch(err => console.log(error));


    //console.log('i am proprs', this.props);
    //console.log('did mount');
  };

  componentWillMount(){
    //console.log(this.state.test);

  };

  handleBeanListEntryClick(Bean) {
    console.log('clicked');
     axios.send('/main')
      .then(res => {
      console.log('didMoutRes',res);
        // this.setState({
        //   test: {coffeeBeans: res.data.test}
        // });
      })
      .catch(err => console.log(error));

  };

  render() {
    return(
      <div className="App">
            <BeanList beans={this.state.test} clickBean={this.handleBeanListEntryClick.bind(this)}/>
      </div>
    );
  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;