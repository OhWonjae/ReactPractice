import React from "react";
class ComAClassTypeEventHandling extends React.Component{
  constructor(props){
    super(props);
    //this.handleBtn1 = this.handleBtn1.bind(this);
   // this.handleBtn2 = this.handleBtn2.bind(this);
  }
  method1(){
    console.log("method1() 실행");
  }
  handleBtn1(event){
    
    console.log("버튼1이 클릭되었습니다.as");
    console.log(this);
    //this.method1();
  }
  handleBtn2(e,x,y){
    console.log(this);
    const result = x+y;
    console.log("계산 결과 :" + result);
    this.method1();
  }
  //방법2
  handleBtn3 = (event) =>{

    console.log("버튼3이 클릭되었습니다.");
    console.log(this);
    this.method1();
  };
  handleBtn4 = (event) =>{
    console.log(event.target.name);
    console.log(event.type);
    console.log("버튼4이 클릭되었습니다.");
    this.method1();
  };
  render(){
    return(
      <div className="card">
      <div className="card-header">
      ComAClassTypeEventHandling
      </div>
      <div className="card-body">
          <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼1</button>
          <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event)=>{this.handleBtn2(event,3,5);}}>버튼2</button>
          <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={(event)=>{this.handleBtn1();}}>버튼2</button>
          <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼2</button>
      
      </div>
    </div>    
    );
  };
}

export default ComAClassTypeEventHandling;