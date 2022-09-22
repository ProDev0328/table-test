import { combineReducers } from "redux";
import inboxReducer from "./Reducers/InboxReducer/inboxSlice";

const rootReducer = combineReducers({
  inbox: inboxReducer,
});

export default rootReducer;
