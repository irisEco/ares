import React, { PureComponent } from 'react'
import { FollowDetail, FootInfo } from './style'

class AutherDetail extends PureComponent {
    render() {
        return (
            <FollowDetail>
                <div className="follow-detail">
                    <FootInfo>
                        <div className="info">
                            <a className="avatar" href="/u/d6f70965199f">
                                <img src="//upload.jianshu.io/users/upload_avatars/16133370/d1839b9c-b6a2-48df-ae0b-f7faa75072a8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96" />
                            </a>
                            <a className="btn btn-success follow"><i className="iconfont ic-follow">+</i><span>关注</span></a>
                            <a className="title" href="/u/d6f70965199f">自媒体技巧</a>
                            <p>写了 22917 字，被 16 人关注，获得了 30 个喜欢</p>
                        </div>
                        <div className="signature">微信 793019674 专注自媒体运营 带你七天见收益</div>
                    </FootInfo>

                </div>
            </FollowDetail>
        )
    }
}
export default AutherDetail;