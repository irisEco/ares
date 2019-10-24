import React, { PureComponent } from 'react'
import { MyCommentList } from './style'
import { connect } from 'react-redux'
import { actionCreater } from './store'

class Comment extends PureComponent {

    componentDidMount() {
        // 添加监听事件
        document.addEventListener('keydowm', this.onKeyDown)
    }
    componentWillUnmount() {
        //移出监听
        document.removeEventListener('keydown', this.onKeyDown)
    }

    render() {
        const { handleSubmit, handleCancel ,handleKeyDown,handleDisplay,display} = this.props
        console.log("this is comment")
        console.log(this)
        return (
            <MyCommentList>
                <div>
                    <form className="new-comment" >
                        <a className="avatar">
                            <img src="//upload.jianshu.io/users/upload_avatars/12343169/f4278717-a833-4217-8202-e61dd02d8d7b?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp" />
                        </a>
                        <textarea id="comment-content" placeholder="写下你的评论..."
                            onKeyDown={(e) => handleKeyDown(e)}
                            onClick={()=> handleDisplay()}
                             ></textarea>
                        <div className="write-function-block" style={{display:display}} >
                            <div data-v-b36e9416="" className="emoji-modal-wrap">
                                <a data-v-b36e9416="" className="emoji">
                                    <i data-v-b36e9416="" className="iconfont ic-comment-emotions">🏷</i>
                                </a>
                            </div>
                            <div className="hint">⌘+Return 发表</div>
                            <a className="btn btn-send" onClick={() => handleSubmit()} >发送</a>
                            <a className="cancel" onClick={()=>handleCancel()}>取消</a>
                        </div>
                    </form>
                </div>

            </MyCommentList>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        display: state.get("matter").get("display"),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //添加评论
        handleSubmit() {
            //显示发布按钮
            console.log('handleDisplay:')
            let display = "block"
            dispatch(actionCreater.CommentShow(display))
            // 评论处理
            const comment = document.getElementById("comment-content");
            let nowTime = new Date()
            let time = nowTime.toLocaleString()
            dispatch(actionCreater.AddComment(time, comment.value))
            document.getElementById('comment-content').value = '';  //清空评论

        }
        ,
        //按command+return就发送
        handleKeyDown(e) {
            var keyCode = e.keyCode || e.which || e.charCode;
            if (keyCode == 13 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
                const comment = document.getElementById("comment-content");
                let nowTime = new Date()
                let time = nowTime.toLocaleString()
                dispatch(actionCreater.AddComment(time, comment.value))
                document.getElementById('comment-content').value = '';  //清空评论
                e.preventDefault();
            }
            // event.preventDefault(); // 注意：阻止默认事件不能放在外面，会阻止浏览器或者input/textarea的默认事件，应该放在相应的按键组合中去阻止
            return false;
        }
        ,
        handleDisplay(){
            console.log('handleDisplay:')
            let display = "block"
            dispatch(actionCreater.CommentShow(display))

        }
        ,
        handleCancel(){
            let display = "none"
            console.log('handleCancel:')
            dispatch(actionCreater.CommentShow(display))
            document.getElementById('comment-content').value = '';  //清空评论
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);