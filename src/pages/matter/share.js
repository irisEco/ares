import React, { PureComponent } from 'react'
import { MetaBottom} from './style'

class Share extends PureComponent {
    render() {
        return (
        <MetaBottom>
        <div className="meta-bottom">
          <div data-v-6ddd02c6="" className="like"><div data-v-6ddd02c6="" className="btn like-group"><div data-v-6ddd02c6="" className="btn-like"><a data-v-6ddd02c6="">喜欢</a></div> <div data-v-6ddd02c6="" className="modal-wrap"><a data-v-6ddd02c6="">29</a></div></div></div>
          <div className="share-group">
            <a className="share-circle" data-action="weixin-share" data-toggle="tooltip" data-original-title="分享到微信">
              <i className="iconfont ic-wechat"></i>
              微信
            </a>
            <a className="share-circle" data-action="weibo-share" data-toggle="tooltip" href="" data-original-title="分享到微博">
              <i className="iconfont ic-weibo"></i>
              微博
            </a>
            <a className="share-circle more-share" tabIndex="0" data-toggle="popover" data-placement="top" data-html="true" data-trigger="focus" href="javascript:void(0);" data-content="
              <ul className=&quot;share-list&quot;>
                <li><a href=&quot;javascript:void(function(){var d=document,e=encodeURIComponent,r='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+e('https://www.jianshu.com/p/d1d6eae11fe8?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=reader_share&amp;utm_source=qzone')+'&amp;title='+e('推荐 自媒体技巧 的文章《趣头条怎么发文章赚钱，一天能赚多少钱》'),x=function(){if(!window.open(r,'qzone','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();&quot;><i className=&quot;social-icon-sprite social-icon-zone&quot;></i><span>分享到QQ空间</span></a></li>
                <li><a href=&quot;javascript:void(function(){var d=document,e=encodeURIComponent,r='https://twitter.com/share?url='+e('https://www.jianshu.com/p/d1d6eae11fe8?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=reader_share&amp;utm_source=twitter')+'&amp;text='+e('推荐 自媒体技巧 的文章《趣头条怎么发文章赚钱，一天能赚多少钱》（ 分享自 @jianshucom ）')+'&amp;related='+e('jianshucom'),x=function(){if(!window.open(r,'twitter','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();&quot;><i className=&quot;social-icon-sprite social-icon-twitter&quot;></i><span>分享到Twitter</span></a></li>
                <li><a href=&quot;javascript:void(function(){var d=document,e=encodeURIComponent,r='https://www.facebook.com/dialog/share?app_id=483126645039390&amp;display=popup&amp;href=https://www.jianshu.com/p/d1d6eae11fe8?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=reader_share&amp;utm_source=facebook',x=function(){if(!window.open(r,'facebook','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();&quot;><i className=&quot;social-icon-sprite social-icon-facebook&quot;></i><span>分享到Facebook</span></a></li>
                <li><a href=&quot;javascript:void(function(){var d=document,e=encodeURIComponent,r='https://plus.google.com/share?url='+e('https://www.jianshu.com/p/d1d6eae11fe8?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=reader_share&amp;utm_source=google_plus'),x=function(){if(!window.open(r,'google_plus','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();&quot;><i className=&quot;social-icon-sprite social-icon-google&quot;></i><span>分享到Google+</span></a></li>
                <li><a href=&quot;javascript:void(function(){var d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='http://www.douban.com/recommend/?url='+e('https://www.jianshu.com/p/d1d6eae11fe8?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=reader_share&amp;utm_source=douban')+'&amp;title='+e('趣头条怎么发文章赚钱，一天能赚多少钱')+'&amp;sel='+e(s)+'&amp;v=1',x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r+'&amp;r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()&quot;><i className=&quot;social-icon-sprite social-icon-douban&quot;></i><span>分享到豆瓣</span></a></li>
              </ul>
            " data-original-title="" title="">更多分享</a>
          </div>
        </div>
        </MetaBottom>
        )
    }
}
export default Share;