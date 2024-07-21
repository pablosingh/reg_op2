import { combineReducers } from 'redux';
import operations from './operations/reducer';
import holdings from './holdings/reducer'

const rootReducer = combineReducers({
    operations,
    holdings,
});

export default rootReducer;