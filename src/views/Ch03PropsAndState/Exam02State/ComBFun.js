import { useState } from "react";

function ComBFun(props){
    const [number, setNumber] = useState({
        number:0
    });
  const  addNumber1 = (event) =>{
        setNumber(number+1);
        setNumber(number+1);
    }
   const addNumber2 = (event) =>{
       setNumber(prevNumber =>prevNumber+1)
       setNumber(prevNumber =>prevNumber+1)
    }
        return(
            <div className="card">
                  <div className="card-header">
                  ComBClass
                  </div>
                  <div className="card-body">
                    <button className="btn btn-info btn-sm mr-2" onClick={addNumber1}>숫자 증가</button>
                    <button className="btn btn-info btn-sm mr-2" onClick={addNumber2}>숫자 증가</button>          
                  </div>
            </div>   
        );
    
}
export default ComBFun;