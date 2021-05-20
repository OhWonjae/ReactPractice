import { Redirect, Route, Switch } from "react-router-dom";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration";
import Ch02JSX from "views/Ch02JSX";
import WebGame from "views/WebGame/index";
import Home from "views/Home";

function AppRoute(){
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponentDeclaration}/>
      <Route path="/ch02" component={Ch02JSX}/>
      <Route path="/webgame" component={WebGame}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;