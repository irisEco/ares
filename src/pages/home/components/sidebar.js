import React, { PureComponent } from 'react';
import {
    NavBar, NavList, ReAuthorsWrapper, ReAuthorsHeader,
    ReAuthorsBody, ReAuthorsList, ReAuthorsFoot,
    ReAuthorsP, ReAuthorsA, ReAuthorsImg, ReAuthorsInfo,
    ReAuthorsAdd, ScrollButton
} from '../style'
import { connect } from 'react-redux';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';
import {getBackToTop} from '../store/actionCreater'
import {Link} from 'react-router-dom'


class NavLinkTop extends PureComponent {

    componentDidMount(){
        this.eventListener();
    }
    componentWillUnmount(){
      this.removeListener();
    };

    eventListener(){
        window.addEventListener("scroll",this.props.handleRollback)
    };
    removeListener(){
        window.removeEventListener("scroll",this.props.handleRollback)
    };
    rollbackTop(){
         window.scrollTo(100, 100);
    };



    render() {
        const recommendAuthorsList = this.props.recommendAuthorsList
        const backToTop = this.props.backToTop
        const lists = recommendAuthorsList.toJS()
        let list = lists.map((list) =>
            <ReAuthorsList key={list.authorId}>
                <ReAuthorsImg src={list.authorImgUrl}></ReAuthorsImg>
                <ReAuthorsInfo >
                    <ReAuthorsA >{list.authorName}</ReAuthorsA>
                    {/* todo :名字链接 */}
                    <ReAuthorsAdd href="#" >+关注</ReAuthorsAdd>
                    <ReAuthorsP>写了{list.numbers}k字-{list.enjoyed}k喜欢</ReAuthorsP>
                </ReAuthorsInfo>
            </ReAuthorsList>

        )


        return (
            <NavBar>
                <NavList className="members">简书会员 ></NavList>
                <NavList className="serial">优选连载 ></NavList>
                <NavList className="copyright">简书版权 ></NavList>
                <NavList className="lecture-hall">简书大讲堂 ></NavList>
                <NavList className="download-mobile-app">下载简书手机APP >
               <p className="_cont">随时随地发现和创作内容</p>
                </NavList>
                <ReAuthorsWrapper>
                    <ReAuthorsHeader>推荐作者</ReAuthorsHeader>
                    <ReAuthorsHeader className="other">
                        <i className="iconfont load">&#xe688;</i>
                        &nbsp;换一批</ReAuthorsHeader>
                    <ReAuthorsBody>
                        {list}
                        <ReAuthorsFoot ><Link   to="/note/">查看全部 ></Link></ReAuthorsFoot>
                    </ReAuthorsBody>
                </ReAuthorsWrapper>
                <ScrollButton className= { backToTop? "":"hide"} onClick={this.rollbackTop} >
                    <Button id="PopoverFocus" type="button"  >
                        <i className="iconfont">&#xe609;</i>
                    </Button>
                    <UncontrolledPopover trigger="hover" placement="bottom" target="PopoverFocus">
                        <PopoverBody>回到顶部</PopoverBody>
                    </UncontrolledPopover>
                </ScrollButton>
            </NavBar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendAuthorsList: state.get("home").get('recommendAuthorsList'),
        backToTop: state.get("home").get("backToTop")

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleRollback(e) {
            let distance = document.documentElement.scrollTop;
            if(distance >500){
                let flag = true;
                dispatch(getBackToTop(flag))
            }else{
                let flag = false;
                dispatch(getBackToTop(flag))
            }
        },
        
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavLinkTop);