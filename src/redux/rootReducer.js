import { combineReducers } from "redux";
import inboxReducer from "./Reducers/InboxReducer/inboxSlice";
import customerReducer from "./Reducers/CustomerReducer/customerSlice"

const rootReducer = combineReducers({
  inbox: inboxReducer,
  customer: customerReducer
});

export default rootReducer;
