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