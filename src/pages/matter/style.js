import styled from 'styled-components';


export const NoteWrapper = styled.div`
  width:620px;
  margin:auto;
`;

export const Header = styled.div`
   &.title{
    word-break: break-word!important;
    word-break: break-all;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
   } 
`;
export const Author = styled.div`
    margin: 30px 0 40px;
    &.avatar {
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    }
    img{
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    }
`;
export const Info = styled.div`
   vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
    a{
    cursor: pointer;
    color: #333;
    margin-right: 10px;
    font-size: 16px;
    vertical-align: middle;
    text-decoration:none;
    }
    a:hover{
    color: #333;
    text-decoration:none;
    }
    .follow{
    padding: 0 7px 0 5px;
    font-size: 12px;
    border-color: #42c02e;
    font-weight: 400;
    line-height: 14px;
    border-radius:40px;
    }
    .follow:hover{
    padding: 0 7px 0 5px;
    font-size: 12px;
    border-color: #42c02e;
    font-weight: 400;
    line-height: 14px;
    border-radius:40px;
    }
    .ic-follow{
        color: white;
    }
    .follow span{
        color: white;
    }
    .meta{
        margin-top: 5px;
        color: #969696;
        font-size: 12px;
    }

    `;
export const NoteContent = styled.div`
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-top:50px;

    `;
export const RewardPanel = styled.div`
    .support-author {
    min-height: 144px;
    padding: 20px 0;
    text-align: center;
    clear: both;
    }
    p{
     padding: 0 30px;
    margin-bottom: 20px;
    min-height: 24px;
    font-size: 17px;
    font-weight: 700;
    color: #969696;
    }
    .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }
   .btn-pay{
    margin-bottom: 20px;
    padding: 8px 25px;
    font-size: 16px;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
    }
    .btn-pay:hover{
        color: #fff; 
    }
    `;

export const ShowFoot = styled.div`
    margin-bottom: 30px;
    .notebook span {
    font-size: 12px;
    color: #c8c8c8;
}
.copyright {
    float: right;
    margin-top: 5px;
    font-size: 12px;
    line-height: 1.7;
    color: #c8c8c8;
}
.modal-wrap {
    float: right;
    margin-top: 5px;
    margin-right: 20px;
    font-size: 12px;
    line-height: 1.7;
}
.modal-wrap{
    color: #c8c8c8;
}
    `;
export const FollowDetail = styled.div`
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;

    .avatar {
    float: left;
    margin-right: 10px;
    width: 48px;
    height: 48px;
    cursor: pointer;
}
    img{
    align-items: center;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align:middle;
    }
    `;
export const FootInfo = styled(Info)`
 display: block;
 .title {
    margin-right: 3px;
    font-size: 17px;
    line-height: 1.8;
    vertical-align: middle;
}
.follow {
    padding: 8px 22px;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
}

.btn-success {
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    border-color: #42c02e;
}
.btn{
    float: right;
    margin-top: 4px;
    padding: 8px 0;
    width: 100px;
    font-size: 16px;
    
}
.btn:hover {
    border-color: #3db922!important; 
    float: right;
    margin-top: 4px;
    padding: 8px 0;
    width: 100px;
    font-size: 16px;
    
}
.info p {
    margin-bottom: 0;
    color: #969696;
}
p{
    margin: 0 0 10px;
}
.signature {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e1e1;
    color: #969696;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

`;
export const MetaBottom = styled.div`
    margin-top: 40px;
    margin-bottom: 80px;

.like[data-v-6ddd02c6] {
    display: inline-block;
}
.like .like-group[data-v-6ddd02c6] {
    position: relative;
    padding: 13px 0 15px 0;
    font-size: 0;
    border: 1px solid #EA6F5A;
    border-radius: 40px;
}

.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
a{
    font-size:14px;
    vertical-align:middle;
    text-align:center;
}
.like .like-group .btn-like[data-v-6ddd02c6] {
    display: inline-block;
    font-size: 19px;
}
.like .like-group .btn-like a[data-v-6ddd02c6] {
    position: relative;
    padding: 18px 30px 18px 55px;
    color: #EA6F5A;
}
.like .like-group .modal-wrap a[data-v-6ddd02c6] {
    color: #EA6F5A;
    padding: 18px 26px 18px 18px;
}

.like .like-group .modal-wrap[data-v-6ddd02c6] {
    font-size: 18px;
    border-left: 1px solid rgba(236, 97, 73, 0.4);
    display: inline-block;
    margin-left: -15px;
}
.meta-bottom .share-group {
    float: right;
    margin-top: 6px;
}
.share-circle {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    position: relative;
}
.share-circle {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    position: relative;
}
img {
    vertical-align: middle;
    border: 0;
}
.share-circle .ic-picture {
    color: #9b9b9b;
}
.share-circle i {
    margin-top: 10px;
    font-size: 24px;
    line-height: 2;
}
.more-share {
    width: auto;
    padding: 4px 18px;
    font-size: 14px;
    color: #9b9b9b;
    line-height: 40px;
    border-radius: 50px;
}

.note .post .meta-bottom .share-group .share-circle {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    position: relative;
}
`;

export const MyCommentList = styled.div`

.new-comment {
    position: relative;
    margin-left: 48px;
}
form {
    margin: 0 0 20px;
}
.avatar {
    position: absolute;
    left: -48px;
}

.note .post .comment-list .avatar {
    margin-right: 5px;
    width: 38px;
    height: 38px;
    vertical-align: middle;
    display: inline-block;
}
textarea {
    padding: 10px 15px;
    width: 100%;
    height: 80px;
    font-size: 13px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    resize: none;
    display: inline-block;
    vertical-align: top;
    outline-style: none;
}

.avatar img {
    width: 38px;
    height: 38px;
    border: 1px solid #ddd;
    border-radius: 50%;
}

img {
    vertical-align: middle;
}
.write-function-block {
    height: 50px;
}
.emoji-modal-wrap[data-v-b36e9416] {
    position: relative;
}
.emoji {
    float: left;
    margin-top: 14px;
}
.emoji i {
    font-size: 20px;
    color: #969696;
}

a {
    cursor: pointer;
}

.hint {
    float: left;
    margin: 20px 0 0 20px;
    font-size: 13px;
    color: #969696;
}
.btn-send {
    float: right;
    width: 78px;
    margin: 10px 0;
    padding: 8px 18px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    color: #fff!important;
    background-color: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.cancel {
    float: right;
    margin: 18px 30px 0 0;
    font-size: 16px;
    color: #969696;
}
`;

export const CommentList = styled.div`
margin-top:30px;
.top-title {
    padding-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
}
.author-only {
    margin-left: 10px;
    padding: 4px 8px;
    font-size: 12px;
    color: #969696;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
}
a {
    color: #969696;
    cursor: pointer;
    text-decoration:none;
}
a:hover{
    color: #969696;
    cursor: pointer;
    text-decoration:none;
}
.close-btn {
    margin-left: 10px;
    font-size: 12px;
    color: #969696;
}
.pull-right {
    float: right!important;
}
.active, .note .post .comment-list .normal-comment-list .top-title .pull-right a:hover {
    color: #2f2f2f;
}
.pull-right a {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #969696;
    display: inline-block;
}
.pull-right a {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #969696;
    display: inline-block;
}
.top-title {
    padding-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
}
.comment-list .author {
    margin-bottom: 15px;
}
.comment {
    padding: 20px 0 30px;
    border-bottom: 1px solid #f0f0f0;
}
.v-tooltip-container {
    position: relative;
}

.v-tooltip-container, .v-tooltip-content {
    display: inline-block;
}
.v-tooltip-content {
    display: inline-block;
}
.avatar {
    margin-right: 5px;
    width: 38px;
    height: 38px;
    vertical-align: middle;
    display: inline-block;
}
.info {
    display: inline-block;
    vertical-align: middle;
}
.v-tooltip-content {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.v-tooltip-container, .v-tooltip-content {
    display: inline-block;
}
.avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
img {
    vertical-align: middle;
}
.comment-list .info {
    display: inline-block;
    vertical-align: middle;
}
.comment-list .name {
    font-size: 15px;
    color: #333;
}
a {
    cursor: pointer;
}
.meta {
    font-size: 12px;
    color: #969696;
}
.comment-list p {
    margin: 10px 0;
    line-height: 1.5;
    font-size: 16px;
    word-break: break-word!important;
    word-break: break-all;
}
.comment-wrap a{
    font-size:14px;
    padding:10px ;
}

.sub-comment-list {
    margin-top: 20px;
    padding: 5px 0 5px 20px;
    border-left: 2px solid #d9d9d9;
}


`;
export const SubComment = styled.div`
.v-tooltip-container {
    position: relative;
}
.v-tooltip-container, .v-tooltip-content {
    display: inline-block;
}

.comment-list .sub-comment {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #f0f0f0;
}
 .warp span {
    margin: 0 0 5px;
    font-size: 14px;
    line-height: 1.5;
}
.sub-tool-group {
    font-size: 12px;
    color: #969696;
}
.sub-tool-group a {
    margin-left: 10px;
    color: #969696;
}
.sub-tool-group a i {
    margin-right: 5px;
    font-size: 14px;
    vertical-align: middle;
}
.sub-comment .report, .note .post .comment-list .sub-comment .subcomment-delete {
    float: right;
    margin: 1px 0 0 10px;
    display: none;
}
.sub-comment:last-child {
    margin: 0;
    padding: 0;
    border: none;
}
.more-comment {
    font-size: 14px;
    color: #969696;
    border: none;
}
.sub-comment-list .add-comment-btn {
    color: #969696;
}
.comment-list .line-warp {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #d9d9d9;
}

.line-warp {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #d9d9d9;
}
.comment-list a{
    color: #3194d0;
}
.comment-list a, .sub-comment-list a:hover {
    color: #3194d0;
}

.maleskine-author{
    color:#f9be0a
}

`;

//loadable.js 正在加载

export const  Loading = styled.div`

.spinner {
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
 
.spinner > div {
  background-color: #67CF22;
  height: 100%;
  width: 6px;
  display: inline-block;
   
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}

`;