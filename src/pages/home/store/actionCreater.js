import axios from 'axios'
import {BACK_TO_TOP,GET_NOTES} from '../store/actionType'
import {fromJS} from 'immutable'


 export const getNotes = (data,notesPage)=>({
    type: GET_NOTES,
    noteList: data,
    notesPage,notesPage

})

export  const  getBackToTop = (flag)=>({ 
        type:BACK_TO_TOP,
        backToTop: flag,
    
})
export const getViewMore =(notesPage) =>{
     return (dispatch)=>{
         axios.get('./api/notes.json?page='+notesPage).then((res)=>{
             console.log(res.data.noteList);
             const data = res.data.noteList;
             dispatch(getNotes(data,notesPage+1));
         }).catch((e)=>{
            console.log('error: notes for failuer,error  is : '+e)
         })
     }
}

