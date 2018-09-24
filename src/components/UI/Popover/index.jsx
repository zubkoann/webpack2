import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

export default class Popover extends React.PureComponent {
  static propTypes = {
    isOpen: false,
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
  }

  render() {
    const { className, renderTitle, children } = this.props;
    const cn = className('Popover', className);
    return (
      <div className={cn}>
        <div className="Popover-title">{renderTitle(this.props, this.state)}</div>
        <div className="Popover-content">{children(this.props, this.state)}</div>
      </div>
    );
  }
}
