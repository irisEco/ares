import React, { PureComponent } from 'react'
import store from 'redux';
import { NoteWrapper, Header, Author, Info, NoteContent,RewardPanel,ShowFoot } from './style'
import { Button } from 'reactstrap'

class Note extends PureComponent {
    render() {
        return (
            <NoteWrapper>
                <Header className="title">
                    趣头条怎么发文章赚钱，一天能赚多少钱
                    </Header>
                <Author>
                    <a className="avatar" href="/u/d6f70965199f">
                        <img src="//upload.jianshu.io/users/upload_avatars/16133370/d1839b9c-b6a2-48df-ae0b-f7faa75072a8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96" />
                    </a>
                    </Author>
                    <Info >
                        <span className="name"><a href="/u/d6f70965199f">自媒体技巧</a></span>
                        <a className="btn btn-success follow"><i className="iconfont ic-follow">+</i><span>关注</span></a>
                        <div className="meta">
                            <span className="publish-time">2019.03.28 13:49</span>
                            <span className="wordage">字数 3184</span>
                            <span className="views-count">阅读 953</span><span className="comments-count">评论 8</span><span className="likes-count">喜欢 29</span></div>
                    </Info>
                    <NoteContent>
                        趣头条一天能赚多少钱？趣头条收入排行榜上的收入是不是真的？不知道你有没有想过类似这样的问题。看到别人都可以实现周收入一万多，是不是骗人的啊？总之，在开始看新闻以前，把一天能赚多少的问题给搞清楚，没毛病！
                       
                        </NoteContent>
                        <RewardPanel>
                        <div id="free-reward-panel" className="support-author">
                            <p>小礼物走一走，来简书关注我</p>
                             <div className="btn btn-pay">赞赏支持</div>
                              <div className="supporter"><ul className="support-list"></ul> 
                              </div></div>
                        </RewardPanel>
                        <ShowFoot>
                        <div className="show-foot">
                            <a className="notebook" href="/nb/33832775">
                            <i className="iconfont ic-search-notebook"></i>
                            <span>日记本</span>
                             </a>
                            <div className="copyright" data-toggle="tooltip" data-html="true" data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
                            © 著作权归作者所有
                            </div>
                            <div className="modal-wrap" data-report-note="">
                            <a id="report-modal">举报文章</a>
                            </div>
                        </div>
                        </ShowFoot>

            </NoteWrapper>

        )
    }
}
export default Note;