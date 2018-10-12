import React from 'react';
import FormField from '../FormField';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    this.emailRef.current.focus();
  }

  render() {
    return (
    <form action="/" className="Form">
      <FormField ref={this.emailRef}/>
    </form>
    );
  }
}
