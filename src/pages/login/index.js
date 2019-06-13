import React, { PureComponent } from "react";
import {LoginWraper,Frame
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreater } from './store'


class Login extends PureComponent {



    render() {
        const { focus, page, handleSearch, handelBlur, searchHotList } = this.props
        return (
            <LoginWraper>
                <img src="/src/statics/jianshu.png" />
                <Frame>heelo</Frame></LoginWraper>
        )
    }


}






const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
       
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);