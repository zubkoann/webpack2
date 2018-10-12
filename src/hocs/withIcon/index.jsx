import React from 'react';

import IconNew from '../../components/UI/IconNew';

const withIcon = ({
  cnNsp,
}) => (WrappedComponent) => {
  const WrappedComponentWithIcon = ({
    iconName,
    iconType,
    children,
    iconPosition = 'start',
    ...props
  }) => {
    const content = [
      <div className={`${cnNsp}-icon`}>
        <IconNew type={iconType} name={iconName}/>
      </div>,
      <div className={`${cnNsp}-content`}>
        {children}
      </div>,
    ];
    if (iconPosition === 'end') {
      content.reverse();
    }
    return (
        <WrappedComponent {...props}>
          {content}
        </WrappedComponent>
    );
  };
  WrappedComponentWithIcon.displayName = `${WrappedComponent.name}WithIcon`;
  return WrappedComponentWithIcon;
};

export default withIcon;
