import React from 'react';

const defaultOptions = {
  logFunction: (props) => {
    console.log(props);
  },
};

const withPropsLogger = (options = {}) => (WrappedComponent) => {
  const settings = {
    ...defaultOptions,
    ...options,
  };

  return (props) => {
    settings.logFunction(props);
    return <WrappedComponent {...props} />;
  };
};

export default withPropsLogger;
