import React, {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import MToastr, {mToast} from '../../src'
import store from '../store'

class Test extends Component {
  render() {
    return (
      <Provider store={store}>
        <MToastr />
        <span onClick={() => {mToast.success({text:"Hello React !"})}} >Show success !</span><br/>
        <span onClick={() => {mToast.error({text:"Hello React !"})}} >Show error !</span><br/>
        <span onClick={() => {mToast.warning({text:"Hello React !"})}} >Show warning !</span><br/>
        <span onClick={() => {mToast.dark({text:"Hello React !"})}} >Show default !</span>
      </Provider>
    )
  }
}

render(<Test/>, document.querySelector('#demo'))
