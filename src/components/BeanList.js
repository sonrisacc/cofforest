import React from 'react';
import BeanListEntry from './BeanListEntry';


const BeanList = (props) => (
  <div className="bean-list">
     <div>{props.beans.coffeeBeans.map((bean, index) =>
        <BeanListEntry key={index} bean={bean} />)}</div>
  </div>
);

export default BeanList;
