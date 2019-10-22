import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store'
import  {reducer as homeReducer } from '../pages/home/store'
import {reducer as matterReducer} from '../pages/matter/store'
import {reducer as loginReducer} from '../pages/login/store'
import {reducer as writerReducer } from '../pages/writeArticle'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    matter: matterReducer,
    login:loginReducer,
    
});

export default reducer;