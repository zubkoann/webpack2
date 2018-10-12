```jsx harmony
const { default: compose } = require('./index');
const { default: withIcon } = require('../withIcon');
const { default: withPropsLogger } = require('../withPropsLogger');


const enhance = compose(
  withPropsLogger(),
  withIcon({
    cnNsp: 'Test Component'
  })
);

const TestComponent = enhance(({ children }) => {
  return <div className="TestComponent">{children}</div>;
});

<TestComponent iconName="apple" iconType="brands" >Test</TestComponent>
```
