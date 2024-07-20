import { combineReducers } from 'redux';
import operations from './operations/reducer';

const rootReducer = combineReducers({
    operations,
});

export default rootReducer;