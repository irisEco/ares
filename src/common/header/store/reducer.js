import * as actionType from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focus: false,
    searchHotList: [],
    mouseEntered: false,
    page: 1,
    totalPage: 0,
    rotate: true
});

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionType.SEARCH_FOCUSED:
            return state.set('focus', true);

        case actionType.SEARCH_BLUR:
            return state.set('focus', false);

        case actionType.GET_SEARCH_HOT_LIST:
            return state.set('searchHotList', action.searchHotList)
                .set('totalPage', action.totalPage)
                .set('page', action.page);

        case actionType.MOUSE_ENTERED:
            return state.set('focus', true).set('mouseEntered', true);

        case actionType.MOUSE_OUT:
            return state.set('mouseEntered', false);

        case actionType.GET_DEFAULT_PAGE:
            return state.set('page', action.page)
                         .set('rotate',action.rotate);

        default:
            return state;
    }

}