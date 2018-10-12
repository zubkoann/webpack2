import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const IconNew = ({ className, type }) => {
  const cn = classNames('fas', className, `fa-${type}`);
  return <i className={cn} />;
};

IconNew.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

IconNew.defaultProps = {
  className: null,
};

export default IconNew;
