import React from 'react';
import BeanListEntry from './BeanListEntry';


const BeanList = (props) => (
  <div className="bean-list">
     <p>{props.beans.coffeeBeans.map((bean) =>
        <BeanListEntry bean={bean} />)}</p>
  </div>
);

export default BeanList;
