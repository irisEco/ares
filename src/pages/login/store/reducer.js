import {fromJS} from 'immutable'
import {actionType} from '../store'

const defaultState = fromJS({
    validate: false,
    userName:'chen',
    userId:2
})
export default (state = defaultState,action)=>{
    switch(action.type){
        case actionType.LOGIN:
            return  state.set('validate',action.validate);
            default:
            return state;
    }

}