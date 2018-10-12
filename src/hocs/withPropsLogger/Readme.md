```jsx harmony
const { default: withPropsLogger } = require('./index');


const TestComponent = withPropsLogger()(({ children }) => {
  return <div>{children}</div>;
});


<TestComponent a="10" b="50" c="100">See console output</TestComponent>
```
