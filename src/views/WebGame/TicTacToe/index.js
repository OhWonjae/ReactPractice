import { Link, Redirect, Route, Switch } from "react-router-dom";
import GameBoard from "./GameBoard";
import GameBoardFunction from "./GameBoardFunction"

function TicTacToe(props){
  return (
    <div className="card mt-3">
      <div className="card-header">
      TicTacToe
      <div><Link className="btn-primary btn-sm " to={`${props.match.url}/class`}>Class</Link></div>
        <div className="mt-2"><Link className="btn-primary btn-sm " to={`${props.match.url}/function`}>Function</Link></div>
      </div>
      <div className="card-body">

        <Switch>
          <Route path={`${props.match.url}/function`} exact component={GameBoardFunction}/>
          <Route path={`${props.match.url}/class`} exact component={GameBoard}/>
        </Switch>
       
      </div>
    </div>    
  );
}

export default TicTacToe;