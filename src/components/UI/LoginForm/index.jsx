import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(oldState => ({
      values: {
        ...oldState.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.values);
  }

  render() {
    const { values: { email, password } } = this.state;
    return (
        <form action="#" noValidate={email} onSubmit={this.handleSubmit}>
          <fieldset className="LoginForm-fieldset">
            <input
                type="email"
                name="email"
                placeholder="your email"
                value={email}
                onChange={this.handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="your password"
                value={password}
                onChange={this.handleChange}
            />
            <button type="submit">login</button>
          </fieldset>
        </form>
    );
  }
}
