import { actionType } from '../store';
import axios from 'axios';
import { fromJS } from 'immutable';


const handleSearchHotList = (data, page) => ({
  type: actionType.GET_SEARCH_HOT_LIST,
  searchHotList: fromJS(data.searchHotList),
  totalPage: Math.ceil(data.searchHotList.length / 10),
  page: page
})
export const getDefaultPage = (page,rotate) => {
  return (dispatch) => {
    const action = {
      type: actionType.GET_DEFAULT_PAGE,
      page: page,
      rotate: !rotate
    }
    dispatch(action)
  }

}

export const handelSearchFocused = () => ({
  type: actionType.SEARCH_FOCUSED
})
export const handelSearchBlur = () => ({
  type: actionType.SEARCH_BLUR
})
export const mouseEntered = () => ({
  type: actionType.MOUSE_ENTERED
})
export const mouseOut = () => ({
  type: actionType.MOUSE_OUT
})


export const getSearchHotList = (page) => {
  return (dispatch) => {
    axios.get('./api/searchHotList.json').then((res) => {
      const data = res.data;
      dispatch(handleSearchHotList(data, page))
    }).catch(() => {
      console.log('error');
    })
  }
}
