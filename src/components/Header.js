import React from 'react';

const Header = ({beanName}) => {
  return (
  <header>
    <h1 className="Header text-center">
      {beanName}
   </h1>
  </header>
  );

}


export default Header;