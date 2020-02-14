import React from 'react';


const Player =(props) =>{


    return(

        <div>
           <h2>name: {props.player.name}</h2>
           <h3>country: {props.player.country}</h3>
           <h3>searches:{props.player.searches}</h3>

        </div>
    )
}

export default Player