import React from 'react';

export default class RefExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
  }

  testMethod = () => {
    alert('Hello I am refExample component');
  };

  render() {
    return (
        <div className = "RefExample">
          <input type="email" name="email" ref={this.emailRef}/>
        </div>
    );
  }
}
