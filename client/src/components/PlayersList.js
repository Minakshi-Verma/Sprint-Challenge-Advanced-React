import React from 'react';
import Player from './Player'
import useDarkMode from './useDarkMode'


const PlayersList = (props) =>{
    const [darkMode, setDarkMode] = useDarkMode();

    return(

       <div>
           <h1>Players List</h1>  
           <div className="dark-mode__toggle">
                <div
                onClick={setDarkMode}
                className={darkMode ? "toggle toggled" : "toggle"}
                ></div>
            </div>         
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