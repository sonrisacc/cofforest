import React from 'react';

const BeanListEntry = (props) => (
  <div
    className="bean-list-entry"
    onClick={() => props.clickBean()}
    >
    {console.log('beanEntry props', props)}
    <div id="content" className="bean-name">
      <h2 className="iname">{props.bean.name}</h2>
      <h3 className="iregion">{props.bean.region}</h3>
      <h4 className="idescription"> {props.bean.description}</h4>
      <p className="iparagraph">"hey"</p>
    </div>

  </div>
);

export default BeanListEntry;