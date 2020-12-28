import React from 'react';
import ReactDOM from 'react-dom';

const element2 =  React.createElement(
  'h1',
  {className:'container'},
  'poo'
);
const element =  React.createElement(
  'div',
  {className:'container'},
  element2,
  element2
);
ReactDOM.render(element, document.getElementById('root'));
