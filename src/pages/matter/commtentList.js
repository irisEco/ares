import React, { PureComponent } from 'react'
import { CommentList,SubComment } from './style'
import { connect } from 'react-redux';
import { actionCreater } from './store/'



class CommentLists extends PureComponent {

    render() {
        const comments = this.props.comments
        const handleReply = this.props.handleReply
        const lists = comments.toJS()
        const transcript = lists.map((list, index) => {

            const replyLen = list.reply.length
            return (
                <div id="comment-41208123" className="comment" key={list.id}>
                    <div>
                        <div className="author">
                            <div data-v-f3bf5228="" className="v-tooltip-container" >
                                <div className="v-tooltip-content"><a href="/u/40ecfe5922cf" target="_blank" className="avatar">
                                    <img src={list.img} /></a>
                                </div>
                            </div>
                            <div className="info"><a href="/u/40ecfe5922cf" target="_blank" className="name">
                                <font >
                                    <font >小子梁小{list.critic}</font>
                                </font>
                            </a>
                                <div className="meta">
                                    <span>
                                        <font >
                                            <font >
                                                {index + 1}楼· {list.dateline}
                                            </font>
                                        </font>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-wrap">
                            <p><font >
                                <font >{list.remark}</font>
                            </font></p>
                            <div >
                                <a href="javascript:void(0)">
                                    <span>
                                        <font >{list.praise}👍赞</font>
                                    </span>
                                </a>
                                <a href="javascript:void(0)" onClick={() => handleReply(list.unfold, list.id, index)}>
                                    <i className="iconfont ic-comment"></i>
                                    <span>
                                        <font >{replyLen}回复</font>
                                        <font>{list.unfold.toString()}</font>
                                    </span>
                                </a>

                                <a href="#" >
                                    <span>

                                        <font >举报</font>

                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                    <SubComment className="sub-comment-list hide">
                        <div id="comment-38728979" className="sub-comment">
                            <div className="warp">
                                <div data-v-f3bf5228="" className="v-tooltip-container" >
                                    <div className="v-tooltip-content">
                                        <a href="/u/db327a8d3767" target="_blank">南猫北狗</a>：
                                    </div>  
                                </div> 
                               <span>
                                   <a href="/u/50f4451c5dfd" className="maleskine-author" target="_blank" data-user-slug="50f4451c5dfd">@是亓浩明</a> 跟我一样
                                </span> 
                            </div> 
                                <div className="sub-tool-group">
                                    <span>2019.04.10 12:32</span>
                                <a className="">
                                    <i className="iconfont ic-comment"></i>
                                    <span>回复</span>
                                </a>
                                <a className="report">
                                    <span>举报</span>
                                </a>
                            </div>
                        </div>
                        <div id="comment-38961000" className="sub-comment">
                            <div className="warp">
                                <div data-v-f3bf5228="" className="v-tooltip-container" >
                                    <div className="v-tooltip-content">
                                        <a href="/u/eba9b1755182" target="_blank">啊哈欠</a>：
            </div>
                                </div>
                                <span>
                                    <a href="/u/50f4451c5dfd" className="maleskine-author" target="_blank" data-user-slug="50f4451c5dfd">@是亓浩明</a> 什么是态度不对
                   </span>
                            </div>
                            <div className="sub-tool-group">
                                <span>2019.04.14 14:07</span>
                                <a className="">
                                    <i className="iconfont ic-comment"></i>
                                    <span>回复</span>
                                </a>
                                <a className="report"><span>举报</span></a>
                            </div>
                        </div>
                        <div className="sub-comment more-comment">
                            <a className="add-comment-btn">
                                <i className="iconfont ic-subcomment"></i>
                                <span>添加新评论</span>
                            </a>
                            <span className="line-warp">
                                还有25条评论，
                            <a>展开查看</a>
                            </span>
                        </div>
                    </SubComment>
                </div>
            )
        })
        return (
            <CommentList>
                <div className="top-title">
                    <span>{lists.length}条评论</span>
                    <a href="javascript:void(0)" className="author-only">只看作者</a>
                    <a href="javascript:void(0)" className="close-btn" >关闭评论</a>
                    <div className="pull-right">
                        <a className="active">按时间倒序</a>
                        <a className="">按时间正序</a>
                    </div>
                </div>
                {transcript}

            </CommentList>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.get('matter').get('comments'),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleReply(flag, id, index) {
            dispatch(actionCreater.SetUnfold(flag, id, index))

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentLists);