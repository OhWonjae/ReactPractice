import React from "react";
import ColorContext from "./ColorContext";
import ComBFun from "./ComBFun";
class ComAClass extends React.Component{
  

  //정적속성
  static contextType = ColorContext; //이렇게 작성하면 this.context에 해당 컨텍스트 내용들어감
  //생성자
  constructor(props){
    super(props);
    this.state = null;
  }
  handleChange=()=>{
    this.context.setColor("red");
  }
  //인스턴스 메소드
  render(){
    return(
 <div className="card">
       <div className="card-header">
       ComAClass
       </div>
       <div className="card-body">
       <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔변경</button>
         
           <div style={{backgroundColor:this.context.color}}> 
               내용
           </div>
           <ComBFun/>
       </div>
 </div>   
    );
  };
}

export default ComAClass ;
