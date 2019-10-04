import React from 'react';
import './Players.css';

function Players(props) {
    return (
    <div className='Players'>
        <div className='players-Card'>
                <h1>{props.squad.name}</h1>
                <h2>{props.squad.country}</h2>
        </div> {/* players-Card end */}
    </div> /* Players end */
)
}

export default Players;