import React ,{PureComponent} from 'react'
import {RewardPanel} from './style'

class Supporter extends PureComponent{
    render(){
        return(
            <RewardPanel>
                        <div id="free-reward-panel" className="support-author">
                            <p>小礼物走一走，来简书关注我</p>
                             <div className="btn btn-pay">赞赏支持</div>
                              <div className="supporter"><ul className="support-list"></ul> 
                              </div></div>
                        </RewardPanel>
        )
    }
}
export default Supporter;