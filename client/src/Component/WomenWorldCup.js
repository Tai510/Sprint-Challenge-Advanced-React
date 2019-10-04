 import React, { useState } from 'react';
 import axios from 'axios';
 import Players from './Players';


class WomenWorldCup extends React.Component {
    constructor() {
        super ()
        this.state = {
         team: [],
         players: [],
       }
     }
       
     
       componentDidMount() {
         axios('http://localhost:5000/api/players')
         .then(res => {
           this.setState({
             team: res.data ,
             players: res.data.length
           })
           console.log('team Value', this.state.team)
         })
         .catch(err => console.log(err))
     }
     
       render() {
         return (
           <div>
           <h1 id='NOP'>Players Count: <span>{this.state.players}</span></h1>
           {this.state.team.map(squad => (
            <Players squad={squad} />
        ))}
           </div>
         );
       }
}

 export default WomenWorldCup;