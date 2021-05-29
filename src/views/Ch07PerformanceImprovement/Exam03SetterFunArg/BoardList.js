import { useCallback, useEffect, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards(){
  const boards = []
  for(var i=5; i>=1; i--){
    boards.push({bno:i, btitle:"제목"+i})
  }

  return boards;
}


function BoardList(props){
 

  const [btitle, setBtitle] = useState("");

  const [boards, setBoards] = useState(getBoards);

  const [bno, setBno] = useState(6);


  // const getLength=()=>{
  //   console.log("getLength() 실행")
  //   return boards.length;
  // }

  const getLength = useMemo(()=>{
    console.log("getLength() 실행")
    return boards.length;
  },[boards]);



  const handleBtitleChange= useCallback((event) =>{
    setBtitle(event.target.value)
  },[]);

  //Prev변수는 주소값이 바뀌지 않기때문에 []안에 bno,btitle,board넣지 않고도 
  //재할당횟수를 줄일수있음. 이떄는 처음 마운트때만 할당해주면 됨.
  const addBoard= useCallback((argBno, argBtitle) =>{
    const newBoard = {bno:argBno, btitle:argBtitle}
    console.log(boards);
    setBoards(prevBoards => {
     var newBoards= prevBoards.concat(newBoard)
      newBoards.sort((a,b)=>{return b.bno - a.bno});
      return newBoards;
    }
      );
    setBno(prevBno => prevBno+1);
    setBtitle("");
  },[])

  const changeBoard = useCallback((bno) =>{
   
  setBoards((prevBoards) => { const newBoards = prevBoards.map(board=>{
    if(board.bno===bno){
      const newBoard = {...board,btitle:board.btitle + "(변경)"}
      return newBoard;
    }else{
      return board;
    }
  })
  return newBoards;
});
  },[])

  const removeBoard = useCallback((bno) =>{
    
    setBoards((prevBoard)=>{
      const newBoards = prevBoard.filter(board=>board.bno!==bno)
      return newBoards;
    }
    );
  },[])

  return (
    <div className="card">
      <div className="card-header">
      BoardList
      </div>
      <div className="card-body">
        <div>
          <span className="mr-2">게시물 수:</span> 
          
          {/* { <span className="text-danger">{getLength()}</span> } */}
          <span className="text-danger">{getLength}</span>
          <div className="d-flex align-items-center mt-2 mb-3">
            <span className="mr-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange}/>
            <button className="btn btn-info btn-sm ml-3" onClick={()=>{addBoard(bno,btitle)}}>추가</button>
          </div>
        </div>
          <div className="d-flex bg-info">
            <span className="border" style={{width:"80px"}}>번호</span>
            <span className="border flex-fill">제목</span>
          </div>

          {boards.map(board=>{
            return (
           <BoardListItem key={board.bno} board={board}
            changeBoard={changeBoard}
             removeBoard={removeBoard}/>
          );})}

      </div>
    </div>    
  );
}

export default BoardList;