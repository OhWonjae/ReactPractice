import { Redirect, Route, Switch,Link } from "react-router-dom";
import TicTacToe from "./TicTacToe";


function WebGame(props){
  return (
    <div className="card">
      <div className="card-header">
      WebGame
      </div>
      <div className="card-body">
      <Switch>
        <Route path="/webgame/TicTacToe" component={TicTacToe}/>
      </Switch>
      </div>
    </div>    
  );
}

export default WebGame;