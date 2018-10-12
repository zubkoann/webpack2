import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './assets/components/app.jsx';
import './index.scss';

// // import Icon from './assets/image/1.jpg';
// // const myIcon = new Image();
// // myIcon.src = Icon;
// // element.appendChild(myIcon);


ReactDOM.render(<App />, document.getElementById('#app'));

ReactDOM.render(<App username={''}/>, document.querySelector('#app'));
// module.hot.accept();
