import { Redirect, Route, Switch } from "react-router-dom";
import GameBoard from "./GameBoard";


function TicTacToe(props){
  return (
    <div className="card mt-3">
      <div className="card-header">
      TicTacToe
      </div>
      <div className="card-body">
        <GameBoard/>
      </div>
    </div>    
  );
}

export default TicTacToe;