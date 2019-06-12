import React, { PureComponent } from 'react'
import { ShowFoot } from './style'

class NoteBook extends PureComponent {
    render() {
        return (
            <ShowFoot>
                <div className="show-foot">
                    <a className="notebook" href="/nb/33832775">
                        <i className="iconfont ic-search-notebook"></i>
                        <span>日记本</span>
                    </a>
                    <div className="copyright" data-toggle="tooltip" data-html="true" data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
                    </div>
                    <div className="modal-wrap" data-report-note="">
                        <a id="report-modal">举报文章</a>
                    </div>
                </div>
            </ShowFoot>
        )
    }
}
export default NoteBook;