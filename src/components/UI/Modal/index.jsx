import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './styles.scss';

export default class Modal extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    btnTextYes: PropTypes.string,
    btnTextNo: PropTypes.string,
  };

  static defaultProps = {
    title: 'Hello',
    text: 'It is a modal',
    btnTextYes: 'Submit',
    btnTextNo: 'Cancel',
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleClickOpen = this.handleClickOpen.bind(this);
    // this.handleClickClose = this.handleClickClose.bind(this);
  }
  handleClickOpen=()=> {
    this.setState({
      isOpen: true,
    });
  }

  handleClickClose=()=> {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
            Click to open modal
            popup
        </Button>
        {this.state.isOpen ? (
          <div className="modal_background">
            <div className="modal_dialog">
              <div className="modal_content">
                <div className="modal_header">
                  <h5 className="modal_title">{this.props.title}</h5>
                  <div onClick={this.handleClickClose} className="modal_btn-close">
                    <span>&times;</span>
                  </div>
                </div>
                <div className="modal__body">
                  <p className="modal__body-text">{this.props.text}</p>
                </div>
                <div className="modal__footer">
                  <Button className="modal_btn modal__btn-yes">{this.props.btnTextYes}</Button>
                  <Button className="modal_btn modal__btn-no">{this.props.btnTextNo}</Button>
                </div>
              </div>
            </div>
          </div>) : ''}
      </div>
    );
  }
}
