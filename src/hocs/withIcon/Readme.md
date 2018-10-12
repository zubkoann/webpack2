reverse button
```jsx harmony
const withIcon = require('./index').default;

const ButtonWithIcon = withIcon({
cnNsp: 'ButtonIcon'
})(ButtonIcon);

<ButtonWithIcon iconPosition= "end" iconName="" iconType="apple-alt" >Click me</ButtonWithIcon>
```
```jsx harmony
const withIcon = require('./index').default;

const ButtonWithIcon = withIcon({
cnNsp: 'ButtonIcon'
})(ButtonIcon);
<ButtonWithIcon  iconName="" iconType="apple-alt" >Click me</ButtonWithIcon>
```