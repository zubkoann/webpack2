import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconNew from '../IconNew';

import './style.scss';

const Panel = ({
  id,
  isOpen,
  className,
  title,
  children,
  toggleOpen,
}) => {
  const cn = classNames('Panel', className, {
    isOpen,
  });

  const iconType = isOpen ? 'minus' : 'plus';

  return (
      <div className={cn}>
        <div className="Panel-title" onClick={() => { toggleOpen(id); } } >
          <div className="Panel-titleText">{title}</div>
          <div className="Panel-titleIcon">
            <IconNew type={iconType}/>
          </div>
        </div>
        <div className="Panel-content">{children}</div>
      </div>
  );
};

Panel.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  classNames: PropTypes.string,
  children: PropTypes.node,
  toggleOpen: PropTypes.func.isRequired,
};

Panel.defaultProps = {
  title: '',
  isOpen: false,
  className: null,
  children: null,
};

export default Panel;
