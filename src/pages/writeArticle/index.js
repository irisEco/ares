import React,{PureComponent} from 'react'
import {WriterWraper} from './style'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Writer extends PureComponent{
 
    render(){
        const status = this.props.status
        if(status){
        return(
         <WriterWraper>hello</WriterWraper>
        )
        }else{
            return( <Redirect to='/login'></Redirect>)
       
        }
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        status:state.get('login').get('validate')
    }
}

export default connect(mapStateToProps,null)(Writer);