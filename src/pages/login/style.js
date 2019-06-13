import styled from 'styled-components'
import logoPic from '../../statics/jianshu.png'

export const LoginWraper = styled.div`
    z-index: 1000;
    background-color: #eeeeee;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Img = styled.a.attrs(
    { href: '/' }
)`
margin: 100px auto 0  auto;
display:block;
width:160px;
height:80px;
background:url(${logoPic});
background-size:cover;
`;
export const Frame = styled.div`
    width: 400px;
    height:300px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;


`;

export const Main = styled.div`
    width: 400px;
    padding: 50px 50px 30px;
    background-color: #fff;
    vertical-align:center;
    display: inline-block;
    .title {
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
}
    .title .active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}
.title a {
    padding: 40px;
    color: #969696;
}
a {
    cursor: pointer;
}
a:hover{
    text-decoration:none;
}
.title b {
    padding: 10px;
}


.sign form {
    margin-bottom: 30px;
}
form {
    margin: 0 0 20px;
}
.sign form .restyle {
    margin-bottom: 0;
}
.sign form .input-prepend {
    position: relative;
    width: 100%;
}
form .input-prepend input {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
}

.sign-in-button {
    background: #3194d0;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;    
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
}
#sign-in-loading {
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: -4px;
    margin-right: 2px;
    display: none;
}
.remember-btn span {
    margin-left: 5px;
    font-size: 14px;
    color: #969696;
    vertical-align: middle;
}
.forget-btn a {
    float:right;
    color: #999;
    font-size: 14px;
    position:relative;
    top:-20px;

}
.more-sign {
    margin-top: 50px;
}
.more-sign ul a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
}
.more-sign ul li {
    margin: 0 5px;
    display: inline-block;
}
li {
    line-height: 20px;
}

 h6 {
    position: relative;
    margin: 0 0 20px;
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;
}
h6:before {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 80px;
    top: 5px;
    left:20px;
}
h6:after {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 80px;
    top: 5px;
    right: 20px;
}
.more-sign ul li {
    margin: 0 5px;
    display: inline-block;
}
li {
    line-height: 20px;
}
`;