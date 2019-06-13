import axios from 'axios'
import { GET_TITLE, GET_CONTENT, GET_COMMENTS, SET_UNFOLD, ADD_COMMENT } from '../store/actionType'
import { fromJS } from 'immutable'


export const SetUnfold = (falg, ids, index) => ({
    type: SET_UNFOLD,
    unfold: !falg,
    ids: ids,
    index: index
})

export const AddComment = (time, comment) => ({
    type: ADD_COMMENT,
    comment: {
        id: null,
        critic: "",
        img: "//upload.jianshu.io/users/upload_avatars/12343169/f4278717-a833-4217-8202-e61dd02d8d7b?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp",
        dateline: time,
        report: false,
        remark: comment,
        praise: 0,
        unfold: true,
        reply: []
    }
})