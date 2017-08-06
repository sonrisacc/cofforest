import React from 'react';

const BeanListEntry = ({bean, clickBean}) => (
  <div
    className="bean-list-entry"
    onClick={() => clickBean(bean.name)}
    >
    <div id="content" className="bean-name">
      <h2 className="iname">{bean.name}</h2>
      <h3 className="iregion">{bean.region}</h3>
      <h4 className="idescription"> {bean.description}</h4>
      <p className="iparagraph">"hey"</p>
    </div>

  </div>
);

export default BeanListEntry;


// {console.log('beanEntry props', props)}3