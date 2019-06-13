import {fromJS} from 'immutable'
import {actionType} from './actionType.js'

const defaultState = fromJS({
    validation: true,
    userName:'chen',
    userId:2
})
export default (state = defaultState,action)=>{
    switch(action.type){
        case actionType.LOGIN:
            return  state;
            default:
            return state;
    }

}