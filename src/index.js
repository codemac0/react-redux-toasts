import React, {Component} from 'react'
import ReduxToastr from 'react-redux-toastr'
import {reducer as toastrReducer} from 'react-redux-toastr'
import Toastr from './m-toast'
import './styles.css';

export default class MToastr extends Component {
  render() {
    return (
      <ReduxToastr
        timeOut={4000}
        newestOnTop={true}
        position="top-right"
        getState={(state) => state.toastr} //default
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
        closeOnToastrClick
      />
    )
  }
}

export const mToast = Toastr;
export const toastReducer = toastrReducer;