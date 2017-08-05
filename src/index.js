import React from 'react';
import ReactDOM from 'react-dom';

//const color = Math.random() > 0.5 ? 'green' : 'red';
const App = (props) => {
  return(
    <div>
       {props.coffeeBeans}
    </div>
  );
};


ReactDOM.render(
   <App coffeeBeans="Hello my love beans"/>,
   document.getElementById('beans')
);