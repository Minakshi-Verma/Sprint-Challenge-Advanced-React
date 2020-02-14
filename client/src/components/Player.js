import React from 'react';


const Player =(props) =>{


    return(

        <div className = "player">
           <h2>Name: {props.player.name}</h2>
           <h3>Country: {props.player.country}</h3>
           <h3>Searches:{props.player.searches}</h3>

        </div>
    )
}

export default Player