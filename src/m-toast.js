import React from 'react';
import {toastr} from 'react-redux-toastr'

const ToastrWrapper = (props) => (
	<div className="toast-content">
        {props.children}
    </div>
)
function getToastrOptions(o) {
    var val = {
        timeOut: o.timeOut ? o.timeOut : 4000,
        className: `mToast ${o.class ? o.class : ""}${o.hideClose?" no-close":""}`,
        showCloseButton: o.hideClose ? false : true,
        component: (
            <ToastrWrapper>
                {o.text ? o.text : "Toast..."}
            </ToastrWrapper>
        )
    };
    return val
}

function successToast(options) {
    options.class = " mToast-success"
    var toastOptions = getToastrOptions(options);
    toastr.success("","", toastOptions)
}
function warningToast(options) {
    options.class = " mToast-warning"
    var toastOptions = getToastrOptions(options);
    toastr.success("","", toastOptions)
}
function errorToast(options) {
    options.class = " mToast-error"
    var toastOptions = getToastrOptions(options);
    toastr.success("","", toastOptions)
}
function darkToast(options) {
    options.class = " mToast-dark"
    var toastOptions = getToastrOptions(options);
    toastr.success("","", toastOptions)
}

const Toastr = {
    success: successToast,
    warning: warningToast,
    error: errorToast,
    dark: darkToast,
};
export default Toastr;