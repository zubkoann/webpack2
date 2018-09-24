import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.scss';

// class App extends Component {
//   render() {
//     return (
//             <div className="App">
//
//
//             <h2>{this.props.username}</h2>
//
//             </div>
//     );
//   }
// }
//
// App.propTypes = {
//   username: PropTypes.string,
// };
//
// App.defaultProps = {
//   username: 'default user',
// };
// export default App;

const App = ({ username }) => (
  <div className="App">
    <h2>{username}!
    </h2>
  </div>
);

App.propTypes = {
  username: PropTypes.string,
};

App.defaultProps = {
  username: 'deer user',
};

export default App;
