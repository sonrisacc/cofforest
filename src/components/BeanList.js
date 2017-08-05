import React from 'react';
import BeanListEntry from './BeanListEntry';


const BeanList = (props) => (
  <div className="bean-list">
     {console.log('beanlist props',props)}
     <div>{props.beans.coffeeBeans.map((bean, index) =>
        <BeanListEntry
          key={index}
          bean={bean}
          clickBean={props.clickBean}
          />)}
     </div>
  </div>
);

export default BeanList;
