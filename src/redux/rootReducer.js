import { combineReducers } from '@reduxjs/toolkit';

import contactReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authSlice from './auth/auth-slice';


const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth:authSlice
});



export default rootReducer;
