import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store'
import  {reducer as homeReducer } from '../pages/home/store'
import {reducer as matterReducer} from '../pages/matter/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    matter: matterReducer
});

export default reducer;