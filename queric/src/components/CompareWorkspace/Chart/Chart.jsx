import { useState } from "react";

import "./Chart.css";

function Chart ({ id, onDeleteChart }) {
    const BLOCK_SIZES = Object.freeze ({
        ONE : 'one-block',
        TWO : 'two-block',
        FOUR: 'four-block'
    });
    const [blockSize, setBlockSize] = useState(BLOCK_SIZES.ONE)

    const handleBlockSizeChange = (e) => {
        let size = BLOCK_SIZES[e.target.value];
        setBlockSize(size);
    }
    return (
        <div className={`chart-container ${blockSize}`}>
            <div className="c-header">
                <h2 className="header-font">New Chart</h2>
                <div className="c-header-button-container">
                    <select onChange={handleBlockSizeChange}>
                        <option>ONE</option>
                        <option>TWO</option>
                        <option>FOUR</option>
                    </select>
                    <button className="secondary-button">Edit Chart</button>
                    <button className="primary-button del-chart-button" onClick={() => onDeleteChart(id)}>X</button>
                </div>
            </div>

        </div>
    )
}

export default Chart;