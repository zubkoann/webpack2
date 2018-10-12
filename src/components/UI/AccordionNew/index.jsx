import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class AccordionNew extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    initialPanelId: PropTypes.string,
  };

  static defaultProps = {
    initialPanelId: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPanelId: props.initialPanelId,
    };
  }

  setActivePanel = (panelId) => {
    this.setState({
      currentPanelId: panelId,
    });
  };

  render() {
    const { children } = this.props;
    return (
        <div className="AccordionNew">
      {children(this.props, this.state, this.setActivePanel)}
    </div>
    );
  }
}
