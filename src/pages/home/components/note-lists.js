import React, { PureComponent } from 'react';
import {
    NoteWrapper, NoteHeader,
    NoteBody, NoteContent,
    NoteImg, NoteFoot,
    NoteAuthor, NoteMore
} from '../style'
import { connect } from 'react-redux';
import { actionCreater } from '../store'
import store from '../../../store'
import axios from 'axios'
import { GET_HOME_LIST } from '../store/actionType'
import {Link} from 'react-router-dom'


class NoteLists extends PureComponent {

    componentDidMount() {
        axios.get('./api/home.json').then((res) => {
            console.log('res: ');
            console.log(res.data.noteLists);
            const noteList = res.data.noteLists
            const recommendAuthorsList = res.data.recommendAuthorsList
            const action = {
                type: GET_HOME_LIST,
                recommendAuthorsList: recommendAuthorsList,
                noteList: noteList
            }
            this.props.getHomeList(action)
        }).catch((e) => {
            console.log('error: notes for failuer,error  is : ' + e)
        })
    }

    render() {
        const { notes, handleViewMore, notesPage } = this.props;
        console.log(this.props)
        console.log('notes: ')
        console.log(notes)
        const list = notes.toJS();
        const note = list.map((note) =>
            <NoteWrapper key={note.id}>
                <NoteHeader>
                    <Link to={'/note/'+note.id} activestyle={{color: 'red'}} className="noteList-link">{note.title}</Link>
                </NoteHeader>
                <NoteBody>
                    <NoteContent>
                        {note.content}
                    </NoteContent>
                    <NoteImg src={note.imgUrl}></NoteImg>
                </NoteBody>
                <NoteFoot>
                    <NoteAuthor>
                        {note.author}
                    </NoteAuthor>
                    <NoteAuthor>
                        {note.chat}
                    </NoteAuthor>
                    <NoteAuthor>
                        {note.enjoy}
                    </NoteAuthor>
                </NoteFoot>
            </NoteWrapper>

        )
        return (
            <div>
                {note}
                <NoteMore onClick={() => handleViewMore(notesPage)}>阅读更多</NoteMore>
            </div>

        )
    }


}




const mapStateToProps = (state) => {
    return {
        notes: state.get("home").get("noteList"),
        notesPage: state.get("home").get("notesPage"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeList(action) {
            dispatch(action)

        },
        handleViewMore(notesPage) {
            dispatch(actionCreater.getViewMore(notesPage))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteLists);
