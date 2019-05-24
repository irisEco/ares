import { fromJS } from 'immutable'
import Liushi from '../statics/liushi.png';
import {GET_HOME_LIST,BACK_TO_TOP,GET_NOTES} from '../store/actionType'


const  defaultState = fromJS({
    noteList:[],
    notesPage:0,
    recommendAuthorsList:[],
    backToTop:false
})

export default (state = defaultState,action)=>{

    switch(action.type){
        case  GET_HOME_LIST:
        return state.merge({
            noteList:fromJS(action.noteList),
            recommendAuthorsList: fromJS(action.recommendAuthorsList)

        });
        case BACK_TO_TOP:
            return state.set("backToTop",action.backToTop)
        case GET_NOTES:
            console.log(action.noteList);
            return state.set("noteList",state.get("noteList").concat(fromJS(action.noteList)))
                        .set("notesPage",action.notesPage)  
        default:
        return state;
    }


}