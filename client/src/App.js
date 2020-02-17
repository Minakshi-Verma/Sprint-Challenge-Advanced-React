import React from 'react';
import axios from 'axios';
import PlayersList from './components/PlayersList';


import './App.css';

class App extends React.Component{
// constructor(props){
//   super(props)
    state ={
    player: [],
    
  }


// [darkMode, setDarkMode] = useDarkMode();


// toggleMode = () => {

// this.setState({
// darkMode:(!darkMode)
// })

// }

componentDidMount(){ 
 
  this.getPlayers()  
}

getPlayers =()=>{
  axios
  .get(`http://localhost:5000/api/players`)
  .then(res=>{
    console.log("I am the axios call from CDM", res)
      this.setState({
      player: res.data
    })
  })
  .catch(err =>{
    console.log("I am the error from CDM", err)
  })

}

render(){
  console.log("This is state from app", this.state)

    return(
      <div>       
        <PlayersList players={this.state.player}/>        
      </div>      
    )
  }

}
  
export default App;
