import QueueItem from "../QueueItem/QueueItem";

import "./ProcessingQueue.css";

function ProcessingQueue () {
    return (
        <div className="processing-queue-container">
            <div className="pq-header">
                <h1 className="header-font">Processing Queue</h1>
                <div className="pq-header-right">
                    <h3 className="subtitle">Active and queued analyses</h3>
                    <h3 className="subtitle">3 active</h3>
                </div>
            </div>
            <div className="pq-queue">
                <QueueItem />
                <QueueItem />
                <QueueItem />
            </div>
        </div>
    )
}

export default ProcessingQueue;