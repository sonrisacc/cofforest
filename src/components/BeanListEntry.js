import React from 'react';

const BeanListEntry = ({bean, clickBean}) => (
  <div
    className="bean-list-entry"
    onClick={() => clickBean(JSON.stringify(bean))}
    >
    <div id="content" className="bean-name">
      <h2 className="iname">{bean.beanName}</h2>
      <h4 className="icategoryName"> {bean.categoryName}</h4>
      <p className="iparagraph">{bean.weight}</p>
      <p className="iparagraph">{bean.grindFineness}</p>
      <p className="iparagraph">{bean.waterTemp}</p>
    </div>

  </div>
);

export default BeanListEntry;


// {console.log('beanEntry props', props)}3