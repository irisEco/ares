import styled from 'styled-components';
import Banner1 from './statics/jianshubanner1.png';
import Banner2 from './statics/jianshubanner2.png';
import Chadian from './statics/chadiangushi.jpeg';
import Shanhu from './statics/shanhu.jpeg';
import Liushi from './statics/liushi.png';
// 主页 home/index.js
export const HomeWrapper = styled.div`
  width:965px;
  margin: 0 auto;
  padding:0;
  overflow:hidden;
`;
//轮播 bannner.js
export const Banner = styled.div`
   width:625px;
   height:270px;
   content:"";
   overflow: hidden;
   margin-top: 50px;
   border-radius: 4px;
`;
//轮播图片
export const BannerImg = styled.div`
  width: 100%;
  height: 0; 
  padding-top: 44%;
  background:url(${Banner1}) no-repeat center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  
`;
//侧边导航 navbar.js
export const NavBar = styled.div`
    position: absolute;
    width: 280px;
    border-radius:10px;
    min-height: 228px;
    left: 920px;
    top:110px
`;
export const NavList = styled.a`
    display:block;
    line-height: 30px;
    padding: 10px 0px 10px 20px;
    margin-bottom: 6px;
    border-radius: 4px;
    font:17px bolder;
    font-weight:900;
    cursor: pointer;
    &.members{
      background:#ffb84f;
      color:white
    }
    &.serial{
      background:#f4e0bd;
      color:#c1923f;
    }
    &.copyright{
      background:#c1e4de;
      color:#518d85;

    }
    &.lecture-hall{
      background:#b7d6ec;
      color:#5e94b4;
    }
    &.download-mobile-app{
      background:white;
      font-size:15px;
      font-weight:350;
    }

    ._cont{
     color:#33333370;
     font-size:13px;
    }
`;

//侧边推荐作者
export const ReAuthorsWrapper = styled.div`
  width:280px;
  margin-top:30px;
  line-height:28px; 
  border-radius:10px;
  a{
  cursor: pointer;
}
`;

export const ReAuthorsHeader = styled.div`
  display:inline-block;
  font-size: 14px;
  color: #969696;
  text-align: left;
  margin:10px 20px 0px 20px;
  
  &.other{
    float:right;

  }
`;
export const ReAuthorsBody = styled.div`

`;
export const ReAuthorsList = styled.div`
    padding: 10px;
    margin-right: 60px;
    margin-bottom:10px;
    display: block;
    height:50px;
`;
//图片
export const ReAuthorsImg = styled.div.attrs(
  props => ({ src: props.src })
)`
 background:url(${props => props.src}) no-repeat;
 background-size: cover;
 background-position: center center;
 padding-top: 25%;
 content: "";
 width: 50px;
 display:inline-block;
 border-radius:50%;
`;
export const ReAuthorsInfo = styled.div`
position:relative;
left:50px;
top:-60px;
padding-left: 5%;
`;
export const ReAuthorsA = styled.a`
    font-size: 14px;
    display: inline;
    line-height: 20px;
`;

export const ReAuthorsP = styled.p`
    font-size: 12px;
    color: #969696;
    margin:0px;
`;
export const ReAuthorsAdd = styled.a.attrs(
  props=>({
    href:props.href || "#"
  })
)`
    float: right;
    padding: 0;
    margin:0%;
    font-size: 13px; 
    color:#42c02e;
  
    
`;

export const ReAuthorsFoot = styled.div`
    display:block;
    text-align:center;
    font-size: 13px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    padding:7px 7px  7px 100px;
    border-radius:5px;
    margin-top:30px;
    a{
      text-decoration:none;
      color:#787878;
    }
    a:hover{
      text-decoration:none;
      color:#787878;
    }
`;

//note-lists

export const NoteWrapper = styled.div`
  width:623px;
  margin-top:50px;
  line-height:28px; 
  border-radius:10px;
  height:187px;
  a{
  cursor: pointer;
}

`;
export const NoteHeader = styled.a`
    width:77%;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5
`;
export const NoteBody = styled.div`
color: #999;
`;
export const NoteContent = styled.div`
    width:77%;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    
`;
export const NoteImg = styled.div.attrs(
  props => ({ picture: props.src || "" })
)`
  position:relative;
  background:url(${props => props.picture}) no-repeat;
  /* background:url(${Liushi}) no-repeat; */
  width:150px;
  padding-top:15%;
  background-size:contain;
  top:-120px;
  right:-490px;
  border-radius:5px;
`;
export const NoteFoot = styled.div`
    position: relative;
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    border-bottom:1px solid #f0f0f0;
    top:-90px;
`;
export const NoteAuthor = styled.a`
   display:inline-block;
    margin-right: 10px;
    color: #b4b4b4;
    margin:10px;
`;
export const NoteMore = styled.div`
    width:625px;
    text-align:center;
    margin: 30px 0px 60px;
    padding:12px 15px;
    color:#ffffff;
    font-size:15px;
    background:#A5A5A5;
    border-radius:20px;
    cursor: pointer;

`;
export const ScrollButton = styled.div`
    position: fixed;
    top: 650px;
    right: 3%;
    &.hide{
      display:none;
    }
`;
