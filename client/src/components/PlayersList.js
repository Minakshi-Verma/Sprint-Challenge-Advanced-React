import React from 'react';
import Player from './Player'


const PlayersList = (props) =>{

    return(

       <div>
           <h1>Players List</h1>           
           <div className ="playersList">
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