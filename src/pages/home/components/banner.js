import React,{Component} from 'react';
import store from 'redux';
import { Banner,BannerImg} from '../style'

class BannerSelect extends Component{
    render(){
        return(
          <Banner>
              <BannerImg></BannerImg>
          </Banner>         
        )
    }
}
export default  BannerSelect;