import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSetUidAction } from "redux/auth-reducer";

function LoginFormFun(props){
    const [uid,setUid] = useState("");
    const globaluid = useSelector((state) => (state.authReducer.uid))
    const dispatch = useDispatch();

    const handleChange =(event) =>{
        setUid(event.target.value)
    }
    const login = () =>{
        dispatch(createSetUidAction(uid));
    }
    const logout = () =>{
        dispatch(createSetUidAction(""));
    }

  return (
    <div className="card">
      <div className="card-header">
      LoginFormFun
      </div>
      <div className="card-body">
      <div className="form-group row">
            <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="uid" value={uid} onChange={handleChange}/>
            </div>
          </div>
          {globaluid === "" ? (
            <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
          ) : ( 
            <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
          )}
      </div>
    </div>    
  );
}

export default LoginFormFun;