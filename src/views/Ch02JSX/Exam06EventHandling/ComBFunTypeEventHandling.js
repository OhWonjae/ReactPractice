function ComBFunTypeEventHandling(props){

  function method1(){

  }
  const handleBtn1 = (event) =>{
    console.log(event.target.name);
    console.log(event.type);
    console.log("버튼1이 클릭되었습니다.");
  };
  const handleBtn2 =(e,x,y) => {
    const result = x+y;
    console.log(e.target.name);
    console.log("계산 결과 :" + result);
  }
  return (
    <div className="card">
      <div className="card-header">
      ComBFunTypeEventHandling
      </div>
      <div className="card-body">
          <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
          <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event)=>{handleBtn2(event,3,5);}}>버튼2</button>
      </div>
    </div>    
  );
}

export default ComBFunTypeEventHandling;