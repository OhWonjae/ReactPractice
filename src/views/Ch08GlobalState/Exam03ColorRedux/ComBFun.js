import { useDispatch, useSelector } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

function ComBFun(props){
    const color = useSelector((state) => (state.colorReducer.color))
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        dispatch(createSetColorAction("green")); //그냥 dispatch({type:SET_COLRO, color:green}}); 이렇게 써도됨. reducer의 dispatch함수임
    }
  return (
    <div className="card">
      <div className="card-header">
          ComBFun
      </div>
      <div className="card-body">
      <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔변경</button>
         
         <div style={{backgroundColor:color}}> 
             내용
         </div>

      </div>
    </div>    
  );
}

export default ComBFun;