import { createStore, combineReducers } from 'redux';
import MacToastr, {mToast , toastReducer} from '../../src'

const rootReducer = combineReducers({
  toastr: toastReducer
});

const store = createStore(
                rootReducer, 
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
              );

export default store;