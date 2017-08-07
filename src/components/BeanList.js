import React from 'react';
import BeanListEntry from './BeanListEntry';


const BeanList = ({beans, clickBean}) => (
  <div className="bean-list">
     {console.log('memememmeem',beans)}
     <div>{Object.keys(beans).map((beanName) =>
        <BeanListEntry
          key={beanName}
          bean={beans[beanName]}
          clickBean={clickBean}
          />)}
     </div>
  </div>
);

export default BeanList;


// {console.log('beanlist props',props)}