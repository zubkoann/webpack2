```jsx harmony
const {Fragment} = require('react');
const { default: branch } = require('./index');
const { default: withIcon } = require('../withIcon');

const  SimpleDiv = ({ children }) => {
  return <div className="TestComponent">{children} </div>;
}

const TestComponent = branch( 
    ({ iconName }) => Boolean(iconName),
      withIcon({  cnNsp: 'TestComponent', }),
       )(SimpleDiv);

<Fragment>
 <TestComponent>
 Text Without Icon
 </TestComponent>
 <hr/>
 <TestComponent   
    iconName="apple" 
    iconType="apple-alt"  
    >
       Text With Icon
 </TestComponent>
 </Fragment>


```
