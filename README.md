# react-redux-toast

[![npm package][npm-badge]][npm]

`react-redux-toast` is a React toast implemented with [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr).

# Installation

`npm install --save react-redux-toast`

```javascript
import {createStore, combineReducers} from 'redux'
import {toastReducer} from 'react-redux-toast'
const reducers = {
  toastr: toastReducer
  // ... other reducers ...
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
```

```javascript
import {Provider}  from 'react-redux'
import MToastr from 'react-redux-toast'

<Provider store={store}>
    ... other things
    <MToastr />
</Provider>
```

```javascript
import React, {Component}  from 'react'
import {mToast} from 'react-redux-toast'

export class YourComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => mToast.success({text:"Hello react !"})} type="button">Toast</button>
      </div>
    )
  }
}
```

# Run a local demo
```
git clone https://github.com/djfr101/react-redux-toast.git
cd react-redux-toast
npm install
npm start
```
open your browser at `http://localhost:3000`

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
