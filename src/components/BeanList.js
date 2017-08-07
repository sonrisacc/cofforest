import React from 'react';
import BeanListEntry from './BeanListEntry';


const BeanList = ({beans, clickBean}) => (
  <div className="bean-list">
     <div>{Object.keys(beans).map((beanId) =>
        <BeanListEntry
          key={beanId}
          bean={beans[beanId]}
          clickBean={clickBean}
          />)}
     </div>
  </div>
);

export default BeanList;


// {console.log('beanlist props',props)}