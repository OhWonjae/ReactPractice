import React from "react";
class GameBoard extends React.Component{
  constructor(props){
    super(props);
    this.boards = new Array(3);
    for(var i=0; i< this.boards.length; i++){
      this.boards[i] = new Array(3);
      for(var j=0; j< this.boards[i].length; j++){
        this.boards[i][j] = {col:i, row:j, checked:false}
      }
    }

    

  }
  render(){
    return(
      <div className="container">
        {this.boards.map((value)=>{
             return (<div className="row">
               {value.map((v)=>{
                 return(<div className="col-4 border text-center" style={{height:"150px"}}>
                   asdf
                 </div>)
               })}

             </div>);
        })}
      </div>  
    );
  };
}

export default GameBoard;