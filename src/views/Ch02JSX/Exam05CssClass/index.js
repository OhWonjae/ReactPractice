import "./style.css"
function Exam05CssClass(props){
  //일반 자바스크립트 주석 사용
  /*
  여러행에 걸쳐 주석 내용을 작성할 때
  */
  const name = "React";
  return (
    
    <div className="card">
      <div className="card-header">
      Exam05CssClass
      </div>
      <div className="card-body">
         <div className="react">{name}</div>
      </div>
    </div>    
  );
}

export default Exam05CssClass;

