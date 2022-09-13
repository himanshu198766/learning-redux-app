import { combineReducers } from "redux";
import reducer from "./amountReducer";

// combine reducers is used to send mutilpe reducer on a single go instead of exporting
//  and importing multiple reducer we can simply use combine reduces and send multiple reduces

const reducers = combineReducers({
  amount: reducer,
});

export default reducers;
