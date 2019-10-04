import React, { useState } from 'react';
import './Players.css';

function Players(props) {

    return (
    <div className='Players'>
        <div className='players-Card'>
                <h1>Name<span id='name'>{props.squad.name}</span> </h1>
                <h2>Country<span id='country'>{props.squad.country}</span></h2>
        </div> {/* players-Card end */}
    </div> /* Players end */
)
}

export default Players;