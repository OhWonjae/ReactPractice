function Exam04InlineCss(){
  const name = "React";
  const mystyle = {
    background:"black", color:"aqua", fontSize:24,fontWeight:"bold", padding:"8px"
  };
  return (
    <div className="card">
      <div className="card-header">
      Exam04InlineCss
      </div>
      <div className="card-body">
          <div style={{ background:"black", color:"aqua", fontSize:24,fontWeight:"bold", padding:"8px"}}>{name}</div>
          <hr/>
          <div style={mystyle}>{name}</div>
    
      </div>
    </div>    
  );
}

export default Exam04InlineCss;