
import React from 'react';
import BeanList from './BeanList';
import axios from 'axios';
import beanData from '../exampleBeanData';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beans: this.props.initialBeans,
      currentBean: this.props.initialBeans[0]
    };

  };

  componentDidMount(){
    console.log('i am proprs', this.props);
    //console.log('did mount');
  };

  componentWillMount(){
    //console.log(this.state.test);
  };

  fetchBean(beanName){
    pushState(
      {currentBeanName: beanName},
      `/bean/${beanName}`
    );
  }

  handleBeanListEntryClick(selectBean) {
    //this.setState({currentBean: selectBean});
    this.fetchBean(selectBean);
    console.log('after click', selectBean)
  };

  render() {
    return(
      <div className="App">
          <BeanList
          beans={this.state.beans}
          clickBean={this.handleBeanListEntryClick.bind(this)}/>
      </div>
    );
  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;