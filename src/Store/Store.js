import { createStore , applyMiddleware , compose , combineReducers } from "redux";
import reducer from "./reducers/reducer";
import ModalReducer from './reducers/ModalReducer';
import TestResultsReducer from "./reducers/TestResultsReducer";
import IsAuthenticated from "./reducers/IsAuthenticated";
import navbarLoaded from "./reducers/navbarLoaded";
import LanguageReducer from "./reducers/LanguageReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
    return next => {
        return action => {
            // console.log(action);
            const result = next(action);
            // console.log(store.getState());
            return result;
        }
    }  ;
};

const Store = createStore(combineReducers({
        reducers: reducer,
        ModalReducer: ModalReducer,
        TestResultReducer:TestResultsReducer,
        IsNavBarLoaded:navbarLoaded,
        LanguageReducer:LanguageReducer,
        AuthReducer:IsAuthenticated}),
    composeEnhancers(applyMiddleware(logger)));

export default Store;
