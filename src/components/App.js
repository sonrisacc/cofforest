
import React from 'react';
import BeanList from './BeanList';
import axios from 'axios';
import beanData from '../exampleBeanData';
import Header from './Header';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beans: this.props.initialBeans,
      currentBeanName: "Cofforest",
      currentBeanId: 0
    };

  };

  componentDidMount(){
    console.log('i am proprs', this.props);
    //console.log('did mount');
  };

  componentWillMount(){
    //console.log(this.state.test);
  };

  fetchBean(bean){
    var beanName = bean.name;
    var beanId = bean.id;
    pushState(
      {currentBeanName: beanName},
      `/bean/${beanName}`
    );
    this.setState({
      currentBeanName:beanName,
      currentBeanId:beanId
    })
  }

  handleBeanListEntryClick(selectBean) {
    //this.setState({currentBean: selectBean});
    selectBean = JSON.parse(selectBean);
    this.fetchBean(selectBean);
    console.log('after click', selectBean)
  };

  render() {
    return(
      <div className="App">
          <Header beanName= {this.state.currentBeanName}/>
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