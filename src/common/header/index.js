import React, { PureComponent } from "react";
import {
    HeaderWrapper, HeaderLogo, Nav, NavItem,
    NavRegister, NavSearch, NavWrite, SearchWrapper,
    SearchInfo, SearchInfoHeader, SearchInfoBody,
    SearchInfoItem, SearchInfoTriangles,
    SearchInfoframe,
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreater } from './store'
import {Link} from 'react-router-dom'


class Header extends PureComponent {


    SearchFrame() {
        const { searchHotOther, focus, page, totalPage, searchHotList, mouseEntered, mouseEnter, mouseOut, rotate } = this.props;
        // console.log(this.props);
        const hotList = searchHotList.toJS();
        const fixHotList = [];
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (hotList[i] !== "" && hotList[i] != null) {
                fixHotList.push(<SearchInfoItem key={hotList[i]}>{hotList[i]}</SearchInfoItem>)
            }
        }

        if (focus || mouseEntered) {
            return (
                <SearchInfoframe
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseOut}
                >
                    <SearchInfoTriangles></SearchInfoTriangles>
                    <SearchInfo >
                        <SearchInfoHeader>热门搜索</SearchInfoHeader>
                        <SearchInfoHeader
                            className="in-a-batch"
                            onClick={() => { searchHotOther(page, totalPage, rotate) }}
                            rotate={this.props.rotate}
                        >
                            <i className="iconfont load">&#xe688;</i>
                            &nbsp;换一批
                        </SearchInfoHeader>
                        <SearchInfoBody>
                            {fixHotList}

                        </SearchInfoBody>
                    </SearchInfo>
                </SearchInfoframe>)
        }
    }


    render() {
        const { focus, page, handleSearch, handelBlur, searchHotList,login,user } = this.props
        return (
            <HeaderWrapper>
                <HeaderLogo href='/' />
                <Nav>
                    <NavItem className="left active">
                        <i className="iconfont">&#xe7b6;</i>
                        &nbsp;首页</NavItem>
                    <NavItem className="left">
                        <i className="iconfont">&#xe638;</i>
                        &nbsp;下载APP</NavItem>
                    <NavItem className="right">
                        {/* this.props.history.location.pathname */}
                        { 
                            login&&user? <Link to='/login_out' className="a_right" >{user}</Link> : <Link  to={{pathname:'/login',state:{from:this.props.location.pathname}}}  className="a_right" >登录</Link>
                        }
                        
                        </NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe609;</i></NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe600;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focus}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focus ? "focused" : ""}
                                onFocus={() => { handleSearch(page, searchHotList) }}
                                onBlur={handelBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focus ? "iconfont focused-font" : "iconfont"}>&#xe60e;</i>
                    </SearchWrapper>

                </Nav>
                <Link to='/writer'>
                    <NavWrite className="nav-right">
                        
                        <i className="iconfont">&#xe616;</i>
                        写文章
                    
                   </NavWrite>
                   </Link>
                    <NavRegister >注册</NavRegister>
                
                {this.SearchFrame()}
            </HeaderWrapper>

        )
    }


}






const mapStateToProps = (state) => {
    return {
        focus: state.get("header").get("focus"),
        searchHotList: state.get("header").get("searchHotList"),
        mouseEntered: state.get("header").get("mouseEntered"),
        page: state.get("header").get("page"),
        totalPage: state.get("header").get("totalPage"),
        rotate: state.get("header").get("rotate"),
        login:state.get("login").get('validate'),
        user:state.get('login').get('userName'),
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        //点击搜索框,获取热门搜索
        handleSearch(page, searchHotList) {
            dispatch(actionCreater.handelSearchFocused())
            dispatch(actionCreater.getSearchHotList(page));
        },
        //失去搜索框焦点
        handelBlur() {
            dispatch(actionCreater.handelSearchBlur())
        },
        //鼠标进入搜索热门框
        mouseEnter() {
            dispatch(actionCreater.mouseEntered());
        },
        //鼠标移出
        mouseOut() {
            dispatch(actionCreater.mouseOut());
        },
        //鼠标点击热门搜索 换一批
        searchHotOther(page, totalPage, rotate) {
            console.log(rotate,typeof rotate);
            if (page < totalPage) {
                dispatch(actionCreater.getDefaultPage(page + 1, rotate))
            } else {
                dispatch(actionCreater.getDefaultPage(page = 1, rotate));
            }

        }

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);