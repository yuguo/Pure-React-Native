## Pure React Native Components

### TL;DR;

Step 1:

```
npm install pure-react-native --save
```

Step 2:

```js
import {Button} from pure-react-native;
<Button
  type="blue"
  text="Submit"
  onPress={alert("Pressed!")}
  onLongPress={alert("Long Pressed!")}
/>
```

Step 3:

That's it!

![](http://yuguous-10027517.cos.myqcloud.com/button.png)

### Why Pure Components

**Stateless components may also be referred to as Pure Components**, or even Dumb Components, and are meant to represent any React Component declared as a function that has no state and returns the same markup given the same props.

These types of components surprisingly compose a large majority of our applications and, as a result, React 0.14 introduces the ability to write these stateless components as functions, also known as functional stateless components.

So these are some of the UI elements that I summarize from Tencent work.

They are simple enough that you can grab and put it into your project now.

### Buttons

```js
import { Button } from 'react-native-elements'

<Button
  text='BUTTON'
/>

<Button
  type="line"
  text='LINE STYLE BUTTON'
/>

<Button
  small
  text="SMALL WITH RIGHT ICON"
  onPress={alert("Pressed!")}
  onLongPress={alert("Long Pressed!")}
  bgColor="blue"
  size="larte"
/>

<Button
  text='BUTTON WITH ICON' />
  disabled
/>
```

![](http://yuguous-10027517.cos.myqcloud.com/button2.png)

### List Cell

![](http://yuguous-10027517.cos.myqcloud.com/cells.png)

### Toast

## Roadmap

**I AM SORRY THAT I DON'T HAVE ENOUGH TIME TO POLISH IT, AND HERE IS THE PLAN:**

- [x] Button
- [x] List Cell
- [x] Toast
- [x] TabNav
- [ ] Search
- [ ] Dialog
- [ ] Menu
- [ ] Actionsheet
- [ ] Share
- [ ] Polish the API
