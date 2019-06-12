import React,{PureComponent} from 'react';
import {Header,Author,Info,NoteContent} from './style';
import {reducer,actionCreater,actionType} from './store'
import {connect} from 'react-redux'

class NoteDetail extends PureComponent{
    render(){
        const {title,content} = this.props
        console.log(this.props)
        return(
            <div>
            <Header className="title">
                    {title}
                    </Header>
                <Author>
                    <a className="avatar" href="/u/d6f70965199f">
                        <img src="//upload.jianshu.io/users/upload_avatars/16133370/d1839b9c-b6a2-48df-ae0b-f7faa75072a8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96" />
                    </a>
                    
                    <Info >
                        <span className="name"><a href="/u/d6f70965199f">自媒体技巧</a></span>
                        <a className="btn btn-success follow"><i className="iconfont ic-follow">+</i><span>关注</span></a>
                        <div className="meta">
                            <span className="publish-time">2019.03.28 13:49</span>
                            <span className="wordage">字数 3184</span>
                            <span className="views-count">阅读 953</span><span className="comments-count">评论 8</span><span className="likes-count">喜欢 29</span></div>
                    </Info>
                    </Author>
                    <NoteContent>
                        {content} 
                        </NoteContent>
                        </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log('state: '+state.get("matter").get("title"))
    return {
        title: state.get('matter').get('title'),
        content: state.get('matter').get('content'),
        comments: state.get('matter').get('comments')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteDetail);