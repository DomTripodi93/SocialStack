import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import TokenReducer from './reducerLogin';


const rootReducer = combineReducers({
  form: formReducer,
  token: TokenReducer
});

export default rootReducer;
