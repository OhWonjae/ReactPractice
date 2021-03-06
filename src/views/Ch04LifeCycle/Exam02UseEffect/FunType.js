import { useEffect, useState } from "react";

function FunType(props){
    console.log("FunTYpe 실행")
    const [state, setState] = useState({
        startNum:0,
        number:0
    });

    useEffect(()=>{
        console.log("마운트, 업데이트 후 실행")
        //마운트 또는 업데이트 후 실행
        // setState({
        //     startNum:props.startNum,
        //     number:props.startNum
        // })
        return (()=>{
            //업데이트 전, 언마운트때 실행
            console.log("업데이트 전, 언마운트때 실행")
        });
    })
    useEffect(()=>{
        console.log("마운트 실행")
        //마운트 또는 업데이트 후 실행
        // setState({
        //     startNum:props.startNum,
        //     number:props.startNum
        // })
        return (()=>{
            //업데이트 전, 언마운트때 실행
            console.log("언마운트때 실행")
        });
    },[])
    useEffect(()=>{
        console.log("마운트 실행, prop 변경시 실행")
        //마운트 또는 업데이트 후 실행
        setState({
            startNum:props.startNum,
            number:props.startNum
        })
        return (()=>{
            //업데이트 전, 언마운트때 실행
            console.log("언마운트때 실행")
        });
    },[props])
    useEffect(()=>{
        console.log("마운트 실행, state 변경시 실행")
        //마운트 또는 업데이트 후 실행
        // setState({
        //     startNum:props.startNum,
        //     number:props.startNum
        // })
        return (()=>{
            //업데이트 전, 언마운트때 실행
            console.log("언마운트때 실행")
        });
    },[state])

    const handleIncrement=(event)=>{
        setState({
            ...state,
            number:state.number+1
        })
    }
    return(
        <div className="card">
        <div className="card-header">
        FunType 
        </div>
        <div className="card-body">
         number:{state.number}
         <button className="btn btn-info btn-sm mt-2" onClick={handleIncrement}>증가 버튼</button>
        </div>
      </div> 
    );
}

export default FunType;