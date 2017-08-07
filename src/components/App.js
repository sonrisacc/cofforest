
import React from 'react';
import BeanList from './BeanList';
import * as api from '../api';
//import beanData from '../exampleBeanData';
import Header from './Header';
import BrewingPage from './BrewingPage';


const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beans: this.props.initialBeans,
      currentBean: {},
      currentBeanName: "Cofforest",
      currentBeanId: -1
    };
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
  };


  componentDidMount(){
    console.log('i am proprs', this.props);
    //console.log('did mount');
  };

  componentWillMount(){
    //console.log(this.state.test);
  };

  fetchBean(bean){
    var beanName = bean.beanName;
    var beanId = bean.id;
    pushState(
      {currentBeanName: beanName},
      `/beans/${beanName}`
    );

    api.fetchBean(beanName).then(beann => {
      console.log('fettttt,', beann)
      this.setState({
        currentBeanId:beann.id,
        currentBeanName: beann.beanName,
        beans: {
          ...this.state.beans,
          [bean.beanName]:beann
        }

      });
    });
  };


  handleBeanListEntryClick(selectBean) {
    //this.setState({currentBean: selectBean});
    selectBean = JSON.parse(selectBean);
    this.fetchBean(selectBean);
    console.log('after click', selectBean)
  };




  handleHomePageClick(){
    pushState(
      {currentBeanId: -1},
      `/`
    );

    api.fetchBeanList().then( () => {
      this.setState({
        currentBeanName:'Cofforest',
        currentBeanId:-1,
        beans:this.props.initialBeans
      });
    });


  };


  currentBean(){
    return this.state.beans[this.state.currentBeanName];
  };

  currentContent() {
    const contentToggle= this.state.currentBeanId === -1;
    console.log(contentToggle);
    if(contentToggle){
      return  <BeanList
          beans={this.state.beans}
          clickBean={this.handleBeanListEntryClick.bind(this)}/>
    } else {
      return <BrewingPage
        currentBean={this.currentBean()}
        clickHome={this.handleHomePageClick}/>
    }
  };

  render() {
    return(
      <div className="App">
          <Header beanName= {this.state.currentBeanName}/>
          {this.currentContent()}

      </div>
    );
  }
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;