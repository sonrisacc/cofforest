import React from 'react';
import BeanListEntry from './BeanListEntry';


const BeanList = ({beans, clickBean}) => (
  <div className="bean-list">
     <div>{beans.map((bean, index) =>
        <BeanListEntry
          key={index}
          bean={bean}
          clickBean={clickBean}
          />)}
     </div>
  </div>
);

export default BeanList;


// {console.log('beanlist props',props)}