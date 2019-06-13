import React, { PureComponent } from 'react'
import { MyCommentList } from './style'
import {connect} from 'react-redux'
import {actionCreater} from './store'

class Comment extends PureComponent {

    render() {
        const {handleSubmit,handleCancel} = this.props
        return (
            <MyCommentList>
                <div>
                    <form className="new-comment" >
                        <a className="avatar">
                            <img src="//upload.jianshu.io/users/upload_avatars/12343169/f4278717-a833-4217-8202-e61dd02d8d7b?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp" />
                        </a>
                        <textarea id="comment-content" placeholder="写下你的评论..." ></textarea>
                        <div className="write-function-block">
                            <div data-v-b36e9416="" className="emoji-modal-wrap">
                                <a data-v-b36e9416="" className="emoji">
                                    <i data-v-b36e9416="" className="iconfont ic-comment-emotions">🏷</i>
                                </a>
                            </div>
                            <div className="hint">⌘+Return 发表</div>
                            <a className="btn btn-send" onClick={()=>handleSubmit()} >发送</a>
                            <a className="cancel" onClick={this.handleCancel}>取消</a>
                        </div>
                    </form>
                </div>

            </MyCommentList>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //添加评论
        handleSubmit(){
            const comment = document.getElementById("comment-content");
            let nowTime = new Date()
            let time = nowTime.toLocaleString()
            dispatch(actionCreater.AddComment(time,comment.value))  
            document.getElementById('comment-content').value = '';  //清空评论

        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comment);