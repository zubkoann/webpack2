import React from 'react';
import RefExample from '../RefExample';

export default class RefExampleParent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.exampleRef = React.createRef();
  }

  invokeTestMethod = () => {
    this.exampleRef.current.testMethod();
  };

  focusInput = () => {
    this.exampleRef.current.emailRef.current.focus();
  }

  render() {
    return (
        <div className="RefExampleParent">
          <button type="button" onClick={this.invokeTestMethod}>
            invoke test method
          </button>
          <button type="button" onClick={this.focusInput}>
            focusInput
          </button>
          <RefExample ref={this.exampleRef}/>
        </div>
    );
  }
}
