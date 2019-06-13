import styled from 'styled-components';
import logoPic from '../../statics/jianshu.png'




export const HeaderWrapper = styled.div`
position:relative;
height:58px;
top:0px;
padding:0px;
margin:0px;
border-bottom:1px solid #f0f0f0;

`
export const HeaderLogo = styled.a.attrs(
    { href: '/' }
)`
position:absolute;
top:0px;
left:0px;
display:block;
width:100px;
height:58px;
background:url(${logoPic});
background-size:contain;
`;


export const Nav = styled.div`
width:960px;
padding:0 15px 0 15px;
height:100%;
margin:0 0 0 250px;
`;

export const NavItem = styled.div`
line-height: 58px;
font-size:17px;
color:#333333;
cursor: pointer;
&.left{
    float:left;
    margin-right:50px;
    

}
&.right{
    float:right;
    margin-right:50px;
    font-size:15px;
    color:#969696
}
&.active{
    color:#ea6f5a;
}
`;

export const SearchWrapper = styled.div`
position:absolute;
left:500px;
background:white
.slide-enter{
    transition:all .2s ease-out;
}
.slide-enter-active{
    width:300px;
}
.slide-exit{
    transition:all .2s ease-out;
}
.slide-exit-active{
width:240px;
}
.iconfont{
    position:relative;
    left:-35px;
    color:#b5b2b4;
    padding:5px;

    &.focused-font{
    background:#868887;
    border-radius:15px;
}
}

`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
   padding: 0 40px 0 20px;
    width: 240px;
    height:37px;
    font-size: 14px;
    border:none;
    outline:none;
    border-radius: 40px;
    color:#b5b2b4;
    box-sizing: border-box;
    margin: 10px 0 10px 20px ;
    background:#eeeeee;
    &.focused{
    width:300px;
}
`;
export const SearchInfoframe = styled.div`
`;

export const SearchInfo = styled.div`
position:absolute;
left:520px;
width:240px;
border:none;
padding:5px;
color:#8a8687;
box-shadow:1px 1px 10px 1px #e2e0e2;
border-radius:5px;
background: white;
z-index:100;
`;

export const SearchInfoTriangles = styled.div`
    position:absolute;
    left:550px;
    top:50px;
    width:0;
    height:0;   
    border-width:0 10px 10px;
    border-style:solid;
    z-index:1000;
    border-color:transparent transparent #fff;/*透明 透明  灰*/
`
export const SearchInfoHeader = styled.div.attrs(
    props => ({ rotate: props.rotate || 0 })
)`
display:inline-block;
font-size:13px;
margin:20px 15px 10px 10px;

&.in-a-batch{
    float:right;
    cursor: pointer;
}
.load{
    display: block;
    float: left;
    font-size:12px;
    width:10px;
    transform:rotate(0deg);
    transition:all .5s ease-in;
    transform-origin:center center;
    transform:${props => (props.rotate ? `rotate(360deg)` : `rotate(0deg)`)};
    
}
&.in-a-batch:hover{
    color:#333333;
    
}
&.load:hover{
    color:#333333;
}
`;

console.log(SearchInfoHeader.attrs)

export const SearchInfoBody = styled.div`
margin-top:10px;
`;
export const SearchInfoItem = styled.span`
display:inline-block;
padding:5px;
margin-left:10px;
margin-bottom:5px;
border:1px solid #eee;
font-size:12px;
&:hover{
    color:#333333;
    cursor: pointer
}

`;

export const NavRight = styled.div`
position:absolute;
top:0;
right:10px;
margin:0;
height:38px;
font-size:15px;
`;
export const NavRightItem = styled.div`
float:right;
margin-right:30px;
line-height:26px;
border:1px solid #ea6f5a;
margin: 9px 5px 0 15px;
padding:5px 25px 5px 25px;
border-radius:20px;
color:#ea6f5a;
cursor: pointer;
&.nav-right{
color:white;
background-color:#ea6f5a;
}
:hover{
    background-color:#f9d2cb;
    color:white;
    border:1px solid white;
}

`;