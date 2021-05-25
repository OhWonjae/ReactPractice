import React from "react";
import { Switch } from "react-router-dom";
class ClassType extends React.Component{
  constructor(props){
    super(props)
    this.state={
      number:0,
      startNum:0
    }
    console.log("constructor() 실행");
  this.handleIncrement = this.handleIncrement.bind(this)
  }
  sett=()=>{
    this.setState({
      ...this.state,
      number:1
    })
  }
  handleIncrement(event){
    this.setState({
      ...this.state,
      number:this.state.number+1
    })
  }
  static getDerivedStateFromProps(props, prevState){
    console.group("getDerivedStateFromProps실행");
    console.log("props",props)
    console.log("prevstate",prevState)
    console.groupEnd();

    //props가 갱신될 때 상태값도 같이 갱신되도록 새로운 상태 리턴
    if(prevState.startNum!==props.startnum){
      return {
        number:props.startnum,
        startNum:props.startnum,
      }
    }else{
      return null;
    }

  }
  shouldComponentUpdate(nextProps,nextState ){
    console.group("shouldComponentUpdate 실행");
    console.log(nextProps);
    console.log(nextState);
    console.groupEnd();
    if(nextState.number%2===0)
    return true;
    else
    return false;
  }
  render(){
    
    console.log("render실행");
        return(
        <div className="card">
          <div className="card-header">
          ClassType 
          </div>
          <div className="card-body">
           <button onClick={this.sett}>asdf</button>
           number:{this.state.number}
           <button className="btn btn-info btn-sm mt-2" onClick={this.handleIncrement}>증가 버튼</button>
          </div>
        </div> 
        );
      }
      componentDidUpdate(){
        console.log("componentDidUpdate() 실행");
      }
      componentDidMount(){
        console.log("componentDidMount실행");
      }
      componentWillUnmount(){
        console.log("componentWillUnmount실행");
      }
}

export default ClassType;