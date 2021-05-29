import { useCallback, useEffect, useState } from "react";

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
  console.log("start!");
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
   if(result===0)return;
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
    
   console.log(state.matchinfo);
    var result = ConfirmWin(aistate.x,aistate.y,2);
    if(result===0)return;
    setState((prevState)=>({
      ...prevState,
      matchinfo:result
    }))
  },[aistate])
  
  useEffect(()=>{
  },[state.matchinfo])


  const ReStart = useCallback(() =>{
    setBoard(initBoard);
     setState((prev)=>({
       ...prev,
       matchinfo:0    
     }));
   },[])

  const ConfirmWin=useCallback((x,y,isuser)=>{
    
    var result=0;
    
    //수평
    var left = x;
    var right = x;
    while(true){
      console.log("cinfirmboard");
      console.log(boards)
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
  },[state,boards])
  const sleep=useCallback((ms) =>{
    return new Promise((resolve)=>{
      setTimeout(()=>{},ms)
    })
  },[])
  const CellClick= useCallback((event) =>{
    var xy = event.target.title.split(",");
    var y = xy[0];
    var x = xy[1];

    var cx,cy;
    // while(true){
    //   console.log("ran!!");

    


    //    cx = Math.floor(Math.random()*state.collen);    
    //    cy = Math.floor(Math.random()*state.rowlen);
    //    if((x!=cx && y !=cy) &&boards[cy][cx].checked===0)break;
    // }
    console.log(boards);
    console.log("x : " + x + "y : " + y);
    var check = false;
    for(var i=0; i< state.rowlen; i++){
      for(var j=0; j< state.collen; j++){
          if(boards[i][j].checked===0 && (i!=y || j!=x)){
            cy = i;
            cx = j;
            check = true;
            break;
          }
      }
      if(check===true)break;
    }
    if(check===false){
      console.log("비김")
      ReStart();
      return;
    }
    console.log("cx : " + cx + "cy : " + cy);


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
      console.log("us1");

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
        console.log("as1");
    
  },[state,boards,userstate])

  return (
    <>
      <div className="container" >
        match:{state.matchinfo}
        {state.matchinfo===0? boards.map((value,Row)=>{
      return (<div className="row">
        {value.map((v, Col)=>{
          return(<div className="col-4 border" key={Row +","+ Col} title={Row +"," +Col} onClick={(event)=>{CellClick(event)}} 
          style={{height:"150px", backgroundColor:boards[Row][Col].checked===0?"white":boards[Row][Col].checked===1?"blue":"red"}}>
          </div>)
        })}
  
      </div>)}):state.matchinfo===1?<div>승리!<button className="btn-primary btn-lg m-2" onClick={ReStart} >다시하기</button></div>:<div>패배!<button className="btn-primary btn-lg m-2"onClick={ReStart} >다시하기</button></div>}
      </div>  
    </>
  )
  
}

export default GameBoardFunction;