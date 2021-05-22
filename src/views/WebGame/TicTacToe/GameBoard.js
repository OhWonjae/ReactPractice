import React from "react";
class GameBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      rowlen:3,
      collen:3,
      boards:null,
      turn:true,
      matchinfo:0
    }
    this.state.boards = new Array(this.state.rowlen);
    for(var i=0; i< this.state.boards.length; i++){
      this.state.boards[i] = new Array(this.state.collen);
      for(var j=0; j< this.state.boards[i].length; j++){
        this.state.boards[i][j] = {col:j, row:i, checked:0}
      }
    }

    this.CellClick = this.CellClick.bind(this);
    this.ReStart = this.ReStart.bind(this);
  }

  sleep(ms) {
    return new Promise((resolve) => {this.setState({
      ...this.state,
      turn:false
    }); setTimeout(()=>{resolve(); this.setState({
      ...this.state,
      turn:true
    })}, ms)});
  }
  updateState(state){
    return new Promise((resolve)=>{
      this.setState(state)
      resolve();
    })
  }
   ConfirmWin(x,y,isuser){
    var result=0;

    //수평
    var left = x;
    var right = x;
    while(true){
      if(left===-1 && right===this.state.collen){result=isuser; break;}
      if(left>=0){
        if(this.state.boards[y][left].checked===isuser){
          left--;
        }
        else
        break;
      }
      if(right<this.state.collen){
        if(this.state.boards[y][right].checked===isuser){
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
      if(up===-1 && down===this.state.rowlen){result=isuser; break;}
      if(up>=0){
        if(this.state.boards[up][x].checked===isuser){
          up--;
        }
        else
        break;
      }
      if(down<this.state.rowlen){
        if(this.state.boards[down][x].checked===isuser){
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
      if(up===-1&&left==-1 && right===this.state.collen&&down===this.state.rowlen){result=isuser; break;}
      if(up>=0 && left>=0){
        if(this.state.boards[up][left].checked===isuser){
          up--;
          left--;
        }
        else
        break;
      }else if(up!==-1||left!==-1)
        break;
      if(down<this.state.rowlen &&right<this.state.collen){
        if(this.state.boards[down][right].checked===isuser){
          down++;
          right++;
        }
        else
        break;
      }else if(right!==this.state.collen||down!==this.state.rowlen)
        break;
    }

     //위로 올라가는 대각선
     left = x;
     right = x;
     up = y;
     down = y;
     while(true){
       console.log("위로대각" + left +"," + up +"," +right +"," + down );
       if(up===-1&&left==-1 && right===this.state.collen&&down===this.state.rowlen){result=isuser; break;}
       if(down<this.state.rowlen && left>=0){
         if(this.state.boards[down][left].checked===isuser){
           down++;
           left--;
         }
         else
         break;
       }else if(down!==this.state.rowlen||left!==-1)
         break;
       if(up>=0&&right<this.state.collen){
         if(this.state.boards[up][right].checked===isuser){
           up--;
           right++;
         }
         else
         break;
       }else if(right!==this.state.collen||up!==-1)
         break;
     }
    
    
    return result;
  }
 async ReStart(){
    this.state.boards = new Array(3);
    for(var i=0; i< this.state.boards.length; i++){
      this.state.boards[i] = new Array(3);
      for(var j=0; j< this.state.boards[i].length; j++){
        this.state.boards[i][j] = {row:i, col:j, checked:0}
      }
    }
    await this.updateState({
      ...this.state,
      matchinfo:0,
      turn:true      
    });
  }
 async CellClick(event, isUser){
   if(this.state.turn===false){console.log("turn is false!");return;}
    var xy = event.target.title.split(",");
    var y = xy[0];
    var x = xy[1];
    if(this.state.boards[y][x].checked!==0)return;
    
    await this.updateState({
      boards:this.state.boards.map((list)=>
        list.map((item)=>item.col===parseInt(x) && item.row===parseInt(y)?{...item,checked:1}:item
        )
      )
    })
    await this.sleep(1000);
    var result = 0;
    result = this.ConfirmWin(x,y,1);
    await this.updateState({
      ...this.state,
      matchinfo:result,
      turn:result===0?true:false
    });
    if(result!==0){return;}
    await this.sleep(1000);
      var cx,cy;
      while(true){
        cx = Math.floor(Math.random()*this.state.collen);    
        cy = Math.floor(Math.random()*this.state.rowlen);
        if(this.state.boards[cy][cx].checked===0)break;
      }
    await this.updateState({
      boards:this.state.boards.map((list)=>
        list.map((item)=>item.col===parseInt(cx) && item.row===parseInt(cy)?{...item,checked:2}:item
        )
      )
    })
    await this.sleep(1000);
    result = this.ConfirmWin(cx,cy,2);
    await this.updateState({
      ...this.state,
      matchinfo:result,
      turn:result===0?true:false
    });
    if(result!==0){return;}    
  }



  render(){
    let boards = this.state.boards;
    let rhtml;
    switch(this.state.matchinfo){
      case 0:
        rhtml = this.state.boards.map((value,Row)=>{
          return (<div className="row">
            {value.map((v, Col)=>{
              return(<div className="col-4 border" title={Row +"," +Col} onClick={(event)=>{this.CellClick(event,true)}} 
              style={{height:"150px", backgroundColor:this.state.boards[Row][Col].checked===0?"white":this.state.boards[Row][Col].checked===1?"blue":"red"}}>
              </div>)
            })}

          </div>);
     })
        break;
      case 1:
        rhtml = 
        <div>승리!<button className="btn-primary btn-lg m-2" onClick={this.ReStart}>다시하기</button></div>
        break;
      case 2:
        rhtml = 
        <div>패배!<button className="btn-primary btn-lg m-2" onClick={this.ReStart}>다시하기</button></div>
        break;
    }
    return(
      <>
      <div style={{display:this.state.matchinfo===0?"block":"none",backgroundColor:this.state.turn===true?"skyblue":"gray"}}>
        현재 턴 : {this.state.turn===true?"당신" : "컴퓨터"}
      </div>
      <div className="container" >
        {rhtml}
      </div>  
      </>
    );
  };
}

export default GameBoard;