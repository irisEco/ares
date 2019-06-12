import React, { PureComponent } from 'react'
import store from 'redux';
import { NoteWrapper, Header, Author, Info, NoteContent,
    RewardPanel,ShowFoot,FollowDetail,FootInfo,
    MetaBottom,CommentList,MyCommentList
} from './style'
import { Button } from 'reactstrap'
import NoteDetail from './noteDetail'
import Supporter from './supporter'
import NoteBook from './noteBook'
import AutherDetail from './autherDetail'
import Share from './share'
import Comment from './comment'
import CommentLists from './commtentList'

 class Note extends PureComponent {
    render() {
        return (
            <NoteWrapper>
                <NoteDetail />
                        <Supporter />
                        <NoteBook />
                        <AutherDetail />
                        <Share />
                        <Comment />
                        <CommentLists />
            </NoteWrapper>

        )
    }
}
export default Note;