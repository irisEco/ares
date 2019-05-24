import React,{Component} from 'react';
import NoteLists from './components/note-lists';
import NavLinkTop from './components/sidebar';
import BannerSelect from './components/banner';
import store from 'redux';
import {
   HomeWrapper

} from './style'

class Home extends Component{

render(){
    return(
        <HomeWrapper>
            <BannerSelect></BannerSelect>
            <NoteLists>hello,home</NoteLists>
            
            <NavLinkTop></NavLinkTop>
            </HomeWrapper>
    )
}

}

 export default Home;