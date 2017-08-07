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
       <div>
          <div>{this.state.beanToBrew}</div>
          <button className="home-link"
            onClick={() => this.props.clickHome()}>
            Contest List
          </button>
       </div>
    )
  };


}


export default Brew;