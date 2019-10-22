import React, { PureComponent } from "react";
import {
    LoginWraper, Frame, Img, Main
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreater } from './store'
import { Redirect } from 'react-router-dom'


class Login extends PureComponent {



    render() {
        const { handelLogin,status } = this.props

        //来源记录
        let from;
        if(this.props.location.state != null){
 
            from = this.props.location.state.from
        }
        const urlTo = from ||'/';
        if(!status){
        return (
            <LoginWraper>
                <Img></Img>
                <Frame>
                    <Main>
                        <h4 className="title">
                            <div className="normal-title">
                                <a className="active" href="/login">登录</a>
                                <b>·</b>
                                <a id="js-sign-up-btn" className="" href="/sign_up">注册</a>
                            </div>
                        </h4>
                        <div className="js-sign-in-container">
                            <form id="new_session" action="/sessions" acceptCharset="UTF-8" method="post">
                                <input name="utf8" type="hidden" value="✓" />
                                <input type="hidden" name="authenticity_token" value="+56iqk8XoZAwo107BDIZTh76s3Gudot1okENnRu75UlnC7Uq4NDoLgkLUJMFcRJYUW9tEiuOmU3ouzSYBGJYSg==" />


                                <div className="input-prepend restyle js-normal">
                                    <input placeholder="手机号或邮箱" type="text"  id="session_email_or_mobile_number" ref={(Input)=>{this.user = Input} }/>
                                    <i className="iconfont ic-user"></i>
                                </div>



                                <div className="input-prepend">
                                    <input placeholder="密码" type="password" id="session_password" ref={(Input)=>{this.pass = Input}}/>
                                    <i className="iconfont ic-password"></i>
                                </div>
                                <input value="false" type="hidden" name="session[oversea]" id="session_oversea" />
                                <div>
                                    <input id="sign-in-form-captcha-challenge" name="captcha[validation][challenge]" autoComplete="off" type="hidden" />
                                    <input id="sign-in-form-captcha-gt" name="captcha[validation][gt]" autoComplete="off" type="hidden" />
                                    <input id="sign-in-form-captcha-validate" name="captcha[validation][validate]" autoComplete="off" type="hidden" />
                                    <input id="sign-in-form-captcha-seccode" name="captcha[validation][seccode]" autoComplete="off" type="hidden" />
                                </div>
                                <div className="remember-btn">
                                    <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me" defaultChecked={this.props.checked} onChange={this.checkboxHandler} /><span>记住我</span>
                                </div>
                                <div className="forget-btn">
                                    <a className="" data-toggle="dropdown" href="">登录遇到问题?</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
                                        <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
                                        <li><a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a></li>
                                        <li><a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a></li>
                                    </ul>
                                </div>
                                <button className="sign-in-button" id="sign-in-form-submit-btn" type="button" onClick={()=>handelLogin(this.user,this.pass)}>
                                    <span id="sign-in-loading"></span>
                                    登录
                                </button>
                            </form>
                            <div className="more-sign">
                                <h6>社交帐号登录</h6>
                                <ul>
                                    <li id="weibo-link-wrap" className="">
                                        <a className="weibo" id="weibo-link">
                                            <i className="iconfont ic-weibo"></i>
                                        </a>
                                    </li>
                                    <li><a id="weixin" className="weixin" target="_blank" href="/users/auth/wechat"><i className="iconfont ic-wechat"></i></a></li>
                                    <li><a id="qq" className="qq" target="_blank" href="/users/auth/qq_connect"><i className="iconfont ic-qq_connect"></i></a></li>
                                    <li className="js-more-method" id="more"><a href="javascript:void(0);"><i className="iconfont ic-more"></i></a></li>
                                    <li className="js-hide-method hide"><a className="douban" target="_blank" href="/users/auth/douban"><i className="iconfont ic-douban"></i></a></li>
                                </ul>

                                <div className="weibo-geetest-captcha"></div>
                            </div>
                        </div>

                    </Main>
                </Frame>
            </LoginWraper>
        )
        }else{
           return(
           <Redirect to={urlTo}></Redirect>
           ) 
        }
    }


}






const mapStateToProps = (state) => {
    return {
        status:state.get('login').get('validate')
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        handelLogin(user,pass){
            console.log(user.value,pass.value)
            dispatch(actionCreater.handelLogin(user.value,pass.value))
        }

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);