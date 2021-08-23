import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import titleListReducer from "./titleListDuck";
import titleDetailReducer from "./titleDetailDuck";

const rootReducer = combineReducers({
	titleList: titleListReducer,
	titleDetail: titleDetailReducer,
});

export default function generateStore() {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
	return store;
}
