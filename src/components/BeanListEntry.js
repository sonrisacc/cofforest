import React from 'react';

const BeanListEntry = (props) => (
  <div className="bean-list-entry">
    <div className="bean-name">
      <h2>{props.bean.name}</h2>
    </div>
    <div className="bean-region">
      <h3>{props.bean.region}</h3>
    </div>
  </div>
);

export default BeanListEntry;