import { useEffect, useState } from "react";

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
    matchinfo:0
  })
  const [userstate, setUserState] = useState({
    x:0,
    y:0
  })


  useEffect(()=>{
   var result = ConfirmWin(userstate.x,userstate.y,1);
    setState((prevState)=>({
      ...prevState,
      matchinfo:result
    }))
  },[userstate])
  const [aistate, setAiState] = useState({
    x:0,
    y:0
  })
  useEffect(()=>{
    console.log(aistate);
    var result = ConfirmWin(aistate.x,aistate.y,2);
    setState((prevState)=>({
      ...prevState,
      matchinfo:result
    }))
  },[aistate])
  

  const ConfirmWin=(x,y,isuser)=>{
    var result=0;

    //수평
    var left = x;
    var right = x;
    while(true){
      if(left===-1 && right===state.collen){result=isuser; break;}
      if(left>=0){
        if(boards[y][left].checked===isuser){
          left--;
        }
        else
        break;
      }
      if(right<state.collen){
        if(boards[y][right].checked===isuser){
          right++;
        }
        else
        break;
      }
    }

    //수직
    var up = y;
    var down = y;
    while(true){
      if(up===-1 && down===state.rowlen){result=isuser; break;}
      if(up>=0){
        if(boards[up][x].checked===isuser){
          up--;
        }
        else
        break;
      }
      if(down<state.rowlen){
        if(boards[down][x].checked===isuser){
          down++;
        }
        else
        break;
      }
    }

    //아래로 내려가는 대각선
    left = x;
    right = x;
    up = y;
    down = y;
    while(true){
      console.log("아래대각" + left +"," + up +"," +right +"," + down );
      if(up===-1&&left==-1 && right===state.collen&&down===state.rowlen){result=isuser; break;}
      if(up>=0 && left>=0){
        if(boards[up][left].checked===isuser){
          up--;
          left--;
        }
        else
        break;
      }else if(up!==-1||left!==-1)
        break;
      if(down<state.rowlen &&right<state.collen){
        if(boards[down][right].checked===isuser){
          down++;
          right++;
        }
        else
        break;
      }else if(right!==state.collen||down!==state.rowlen)
        break;
    }

     //위로 올라가는 대각선
     left = x;
     right = x;
     up = y;
     down = y;
     while(true){
       console.log("위로대각" + left +"," + up +"," +right +"," + down );
       if(up===-1&&left==-1 && right===state.collen&&down===state.rowlen){result=isuser; break;}
       if(down<state.rowlen && left>=0){
         if(boards[down][left].checked===isuser){
           down++;
           left--;
         }
         else
         break;
       }else if(down!==state.rowlen||left!==-1)
         break;
       if(up>=0&&right<state.collen){
         if(boards[up][right].checked===isuser){
           up--;
           right++;
         }
         else
         break;
       }else if(right!==state.collen||up!==-1)
         break;
     }
    
    
    return result;
  }
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

    var cx,cy;
    while(true){
      cx = Math.floor(Math.random()*state.collen);    
      cy = Math.floor(Math.random()*state.rowlen);
      if((x!=cx && y !=cy) &&boards[cy][cx].checked===0)break;
    }
    if(boards[y][x].checked!==0)return;
    setBoard((prevBoard)=>{
      return prevBoard.map((list)=>
      list.map((item)=>item.col===parseInt(x) && item.row===parseInt(y)?{...item,checked:1}:item
      )
    )}
    )
    
    setUserState((prevState)=>({      
          x:x,
          y:y
      }))


      setBoard((prevBoard)=>{
        return prevBoard.map((list)=>
        list.map((item)=>item.col===parseInt(cx) && item.row===parseInt(cy)?{...item,checked:2}:item
        )
      )}
      )
      setAiState((prevState)=>({      
            x:cx,
            y:cy
        }))
    
    
  }

  return (
    <>
      <div className="container" >
        {state.matchinfo===0? boards.map((value,Row)=>{
      return (<div className="row">
        {value.map((v, Col)=>{
          return(<div className="col-4 border" key={Row +","+ Col} title={Row +"," +Col} onClick={(event)=>{CellClick(event)}} 
          style={{height:"150px", backgroundColor:boards[Row][Col].checked===0?"white":boards[Row][Col].checked===1?"blue":"red"}}>
          </div>)
        })}
  
      </div>)}):state.matchinfo===1?<div>승리!<button className="btn-primary btn-lg m-2" >다시하기</button></div>:<div>패배!<button className="btn-primary btn-lg m-2" >다시하기</button></div>}
      </div>  
    </>
  )
  
}

export default GameBoardFunction;