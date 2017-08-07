import React from 'react';

class Brew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beanToBrew: this.props.currentBean.description
    };
  };

  render() {
    return(
      <h1 >{this.state.beanToBrew}</h1>
      )
  }


}


export default Brew;