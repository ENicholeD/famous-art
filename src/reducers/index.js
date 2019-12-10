import { combineReducers } from 'redux';
import ArtReducer from './art';

const rootReducer = combineReducers({
    art: ArtReducer
});

export default rootReducer;