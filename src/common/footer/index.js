import React,{PureComponent} from 'react';
import store from 'redux';
import {
    Main,FootLink,Mark
} from './style'

class Footer extends PureComponent{

render(){
    return(
    <Main>
   <FootLink>
       关于简书
    </FootLink>
    <FootLink>
       联系我们
    </FootLink>
    <FootLink>
       加入我们
    </FootLink>
    <FootLink>
       简书出版
    </FootLink>
    <FootLink>
       品牌与徽标
    </FootLink>
    <FootLink>
       帮助中心
    </FootLink>
    <FootLink>
       合作伙伴
    </FootLink>
    <Mark>
    Copyright © 2019 ares chen. 当前呈现版本 19.05.07
    </Mark>
    </Main>

    )
}


};

export default Footer;