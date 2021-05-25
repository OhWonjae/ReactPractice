import style from "./style.module.scss";
import classnames from "classnames/bind"
import { useState } from "react";

const cx = classnames.bind(style)
function Exam02Sass(){
    const [state, setState] = useState({
        userId:"user1",

    });
  return (
    <div className="card">
      <div className="card-header">
      Exam02Sass
      </div>
      <div className="card-body">
          <div className={style.wrapper}>
              Hello, React
          </div>
          <div className={style.wrapper+" " + style.inverted + " mt-3"}>
              Hello, React
          </div>
          <div className={`${style.wrapper} ${style.inverted} mt-3`}>
              Hello, React
          </div>
          {state.userId?
          <div className={classnames(style.wrapper,style.inverted,"mt-3")}>
          Hello, React4
          </div>
            :
          <div className={classnames(style.wrapper,"mt-3")}>
              Hello, React4
          </div>
        }
          <div className={classnames(style.wrapper,{[style.inverted]:state.userId!==null},"mt-3")}>
          Hello, React5
          </div>
          <div className={cx("wrapper",{"inverted":state.userId!==null},"mt-3")}>
          Hello, React6
          </div>
      </div>
    </div>    
  );
}
export default Exam02Sass;