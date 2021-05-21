import ComAClass from "./ComAClass";
import ComAFun from "./ComAFun";
import ComBClass from "./ComBClass";
import ComCFun from "./ComCFun";
import ComCFunWithImmer from "./ComCFunWithImmer";

function Exam02State(props){
    return(
        <div className="card">
              <div className="card-header">
              Exam02State
              </div>
              <div className="card-body">
                  <ComAClass/>
                  <ComAFun/>
                  <ComBClass/>
                  <ComCFun/>
                  <ComCFunWithImmer/>
              </div>
        </div>   
    );
}

export default Exam02State;