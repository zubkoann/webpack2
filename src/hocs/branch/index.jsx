import React from 'react';

const branch = (
  checkCondition,
  hocIfTrue,
  hocIfFalse,
) => (WrappedComponent) => {
  const BranchedComponent = (props) => {
    let Component = WrappedComponent;

    if (typeof checkCondition !== 'function') {
      return <Component {...props} />;
    }
    if (checkCondition(props)) {
      if (typeof hocIfTrue === 'function') {
        Component = hocIfTrue(WrappedComponent);
      }
    } else if (typeof hocIfFalse === 'function') {
      Component = hocIfTrue(WrappedComponent);
    }
    return <Component{...props} />;
  };


  BranchedComponent.displayName = `Branched${WrappedComponent.name}`;
  return BranchedComponent;
};

export default branch;
