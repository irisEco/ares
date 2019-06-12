import React, { PureComponent } from 'react'
import { MyCommentList } from './style'
import {connect} from 'react-redux'

class Comment extends PureComponent {
    render() {
        const {handleSubmit,commentChange,handleCancel} = this.props.handleSubmit
        return (
            <MyCommentList>
                <div>
                    <form className="new-comment" >
                        <a className="avatar">
                            <img src="//upload.jianshu.io/users/upload_avatars/12343169/f4278717-a833-4217-8202-e61dd02d8d7b?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp" />
                        </a>
                        <textarea placeholder="写下你的评论..." onChange={this.commentChange}></textarea>
                        <div className="write-function-block">
                            <div data-v-b36e9416="" className="emoji-modal-wrap">
                                <a data-v-b36e9416="" className="emoji">
                                    <i data-v-b36e9416="" className="iconfont ic-comment-emotions">🏷</i>
                                </a>
                            </div>
                            <div className="hint">⌘+Return 发表</div>
                            <a className="btn btn-send" onSubmit={this.handleSubmit} >发送</a>
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
        handleSubmit(){

        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comment);