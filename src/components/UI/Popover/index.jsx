import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

export default class Popover extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    renderTitle: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isOpen: false,
    className: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  }

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { className, renderTitle, children } = this.props;
    const { isOpen } = this.state;
    const cn = classNames('Popover', className, {
      isOpen,
    });
    return (
      <div className={cn}
      onMouseOver={this.showContent}
      onMouseOut={this.hideContent}
      >
        <div className="Popover-title">
          {renderTitle(this.props, this.state)}
          </div>
        <div className="Popover-content">
          {children(this.props, this.state)}
          </div>
      </div>
    );
  }
}
