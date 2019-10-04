 import React, { useState } from 'react';
 import axios from 'axios';
 import Players from './Players';


class WomenWorldCup extends React.Component {
    constructor() {
        super ()
        this.state = {
         team: [],
       }
     }
       
     
       componentDidMount() {
         axios('http://localhost:5000/api/players')
         .then(res => {
           this.setState({
             team: res.data
           })
           console.log('team Value', this.state.team)
         })
         .catch(err => console.log(err))
     }
     
       render() {
         return (
           <div>
           {this.state.team.map(squad => (
            <Players squad={squad} />
        ))}
           </div>
         );
       }
}

 export default WomenWorldCup;