import ComB from "./ComB";
import ComA from"./ComA";
import ComC from "./ComC";

function Exam07Repeat(props){
  return (
    <div className="card">
      <div className="card-header">
      Exam07Repeat
      </div>
      <div className="card-body">
          <ComA/>
          <ComB/>
          <ComC/>
      </div>
    </div>    
  );
}

export default Exam07Repeat;