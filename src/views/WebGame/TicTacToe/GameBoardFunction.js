import { useState } from "react";

function initBoard(){
  let boards = new Array(3);
  for(var i=0; i< boards.length; i++){
    boards[i] = new Array(3);
    for(var j=0; j< boards[i].length; j++){
      boards[i][j] = {col:j, row:i, checked:0}
    }
  }

  return boards
}

function GameBoardFunction(props){
  const [boards, setBoard] = useState(initBoard);
  const [state, setState] = useState({
    rowlen:3,
    collen:3,
    turn:true,
    matchinfo:0
  })
  const sleep=(ms) =>{
    return new Promise((resolve)=>{
      setTimeout(()=>{},ms)
    })
  }
  const CellClick= async(event) =>{
    if(state.turn===false){console.log("turn is false!");return;}
    var xy = event.target.title.split(",");
    var y = xy[0];
    var x = xy[1];
    if(boards[y][x].checked!==0)return;
    setBoard(
      boards.map((list)=>
        list.map((item)=>item.col===parseInt(x) && item.row===parseInt(y)?{...item,checked:1}:item
        )
      )
    )
    await sleep(1000);
    console.log(boards)
    
    
  }

  return (
    <>
   {boards.map((value,Row)=>{
    return (<div className="row">
      {value.map((v, Col)=>{
        return(<div className="col-4 border" key={Row +","+ Col} title={Row +"," +Col} onClick={(event)=>{CellClick(event)}} 
        style={{height:"150px", backgroundColor:boards[Row][Col].checked===0?"white":boards[Row][Col].checked===1?"blue":"red"}}>
        </div>)
      })}

    </div>)})}
    </>
  )
  
}

export default GameBoardFunction;