import { MdOutlineCancel } from "react-icons/md";

import "./QueueItem.css";

function QueueItem () {
    return (
        <div className="queue-item-container">
            <div className="qi-header">
                <div className="qi-header-left">
                    <h2 className="header-font">how_does_it_feel.txt</h2>
                    <h3 className="subtitle">Quick Summary</h3>
                </div>
                <h2>45%</h2>
            </div>
            
            <hr/>
            <div className="qi-bottom">
                <h3 className="subtitle">Est. 4m 05s remaining</h3>
                <button className="primary-button qi-cancel-button"><MdOutlineCancel /></button>
            </div>
        </div>
    )
}

export default QueueItem;