import React from 'react';
import Player from './Player'


const PlayersList = (props) =>{

    return(

       <div>
           <h1>Players</h1>
           <div>
               {props.players.map(player =>(
                <Player className ="player"
                key = {player.id}
                player ={player} 
                />                 

               ))}
           </div>
       </div>
    )


}

export default PlayersList;