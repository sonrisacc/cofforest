import React from 'react';

const BeanList = (bean) => (
  <div className="BeanList">
    <div className="bean-name">
      {bean.name}
    </div>
    <div className="bean-region">
      {bean.region}
    </div>
  </div>
);

export default BeanList;
