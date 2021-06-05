import { useEffect, useMemo, useState } from "react";
function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777).toString(16);
}
var a = 1;
function ComAFun(props){
    const [state, setState] = useState({
        number:0,
        color:"black"
    });
    const test = useMemo(() =>{
        console.log("test");
    },[state.color])
    
    useEffect(()=>{
        console.log("after2" + a);
        return(()=>{
            console.log("before2" + a);
        })
    },[state.color])
   
    const addNumber = async(event) =>{
        
         setState((prevstate)=>({
            ...prevstate,
            number:prevstate.number+1,
        
        }))
        await new Promise((resolve)=>{
            setTimeout(resolve,1000);
        })
        setState((prevstate)=>({
            ...prevstate,
            number:prevstate.number+1,
        
        }))
    }
    const changeColor = (event) =>{
        a  = 10;
        setState({
            ...state,
            color:getRandomColor()
        })
    }
    console.log("hi")
    return (
        <div className="card">
            {test}
              <div className="card-header">
                ComAFun
              </div>
              <div className="card-body">
              <h3 style={{color:state.color}}>{state.number}</h3>
              <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
              <button className="btn btn-info btn-sm" onClick={changeColor}>색깔 변경</button>    
              </div>
        </div>   
    );
}

export default ComAFun;