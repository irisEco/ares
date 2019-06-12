import axios from 'axios'
import {GET_TITLE,GET_CONTENT,GET_COMMENTS,SET_UNFOLD} from '../store/actionType'
import {fromJS} from 'immutable'
export const SetUnfold =(falg,ids,index)=>({
    type: SET_UNFOLD,
    unfold:!falg,
    ids:ids,
    index:index
})