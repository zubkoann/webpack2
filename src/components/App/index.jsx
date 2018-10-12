import React from 'react';
import { compose, withProps, branch } from 'recompose';

import Icon from '../UI/Icon';

import './styles.scss';


const componentA = enhance(({ greet }) => <div>componentA{greet}</div>);
const componentB = enhance(({ greet }) => <div>componentB{greet}</div>);
const enhance = compose(
  withProps({
    greet: 'Hello',
  }),
  branch(
    ({ isAComponent }) => isAComponent,
    renderComponent(ComponentA),
    renderComponent(ComponentB),
  ),
);
const Welcome = enhance(null);

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="App-headerLogo">
            <Icon />
          </div>
        </header>
        <Welcome/>
        <Welcome isAComponent/>
      </div>
  );
}

export default App;
