import React from 'react';

export default class FocusRef extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }


  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
        <div>
          <input
              type="text"
              ref={this.inputRef}
          />
        </div>
    );
  }
}
