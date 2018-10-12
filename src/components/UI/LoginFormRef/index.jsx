import React from 'react';

export default class LoginFormRef extends React.Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }


  handleSubmit = (event) => {
    event.preventDefault();
    // const values = {
    //   email: this.emailRef.current.value,
    //   password: this.passwordRef.current.value,
    // }
    console.log(this.emailRef.current.value, this.passwordRef.current.value);
  }

  render() {
    return (
        <form action="#" noValidate={this.emailRef} onSubmit={this.handleSubmit} >
          <fieldset className="LoginForm-fieldset">
            <input
                type="email"
                name="email"
                placeholder="your email"
                ref={this.emailRef}
            />
            <input
                type="password"
                name="password"
                placeholder="your password"
                ref={this.passwordRef}
            />
            <button type="submit">login</button>
          </fieldset>
        </form>
    );
  }
}
