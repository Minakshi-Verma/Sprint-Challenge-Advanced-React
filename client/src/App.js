import React from 'react';
import axios from 'axios';
import PlayersList from './components/PlayersList'
import './App.css';

class App extends React.Component{
constructor(props){
  super(props)
  this.state ={
    player: []
  }
}

componentDidMount(){ 
  this.getPlayers()  
}

// componentDidUpdate(prevProps,prevState){
//   if (prevState.player !== this.state.player)
//   // this.getPlayers()
// }

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
        <h2>Players List</h2>
        <PlayersList players={this.state.player}/>        
      </div>
    )
  }

}
  
export default App;
