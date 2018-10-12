import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconNew from '../IconNew';
import { withIcon, branch } from '../../../hocs';


import './styles.scss';
import Button from '../Button';

const ButtonIcon = ({
  className,
  children,
  type,
  iconName,
  iconType,
  ...props
}) => {
  const cnNsp = 'Button';
  const cn = classNames(cnNsp, className);
  if (iconType) {
    return (
    <button
        className={cn}
        type={type}
        {...props}
    >
      <span className={`${cnNsp}-Icon`}>
      <IconNew type={iconType} className={iconName}/>
    </span>
  {children}
  </button>
    );
  }
  return (
      <button
          type="button"
          className={cn}
          {...props}
      >
        {children}
      </button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
};

ButtonIcon.defaultProps = {
  className: '',
  type: 'button',
};

// export default ButtonIcon;
//
// export default (props) => {
//   const { iconName } = props;
//   const ButtonWithIcon = withIcon({
//     cnNsp: 'ButtonIcon',
//   })(ButtonIcon);
//
//   if (iconName) {
//     return <ButtonWithIcon {...props}/>;
//   }
//   return <ButtonIcon {...props}/>;
// };

export default branch(
  ({ iconName }) => Boolean(iconName),
  withIcon({ cnNsp: 'ButtonIcon' }),
)(ButtonIcon);
