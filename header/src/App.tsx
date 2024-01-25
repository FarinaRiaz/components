import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const App = () => {
  return(
    <>
    <div style={{display: "flex", justifyContent: "space-between", paddingLeft: "20px", paddingRight: "20px"}}>
       <div className="bg-green-400" style={{fontSize: "50px", fontWeight: "bold", padding: "10px" }}>
      Shopping Center
    </div>
    <div>
    <div style={{background: "black", borderRadius: "30px", color: "white", width: "20px", height: "20px", display: "flex", justifyContent:"center", alignItems: "center", position: "absolute",marginLeft: "45px", marginTop: "5px"}}>0</div>
      <FaShoppingCart style={{ fontSize: "50px", padding: "8px", fill: "white", }} />
      </div>
    </div>
    </>
  )
}
export default App;

