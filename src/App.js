import { useState } from "react";
import Dashboard from "./Views/DashboardView/Dashboard";
import Login from "./Views/LoginView/Login";
import "./App.css";

function App() {
  const [show,setShow]=useState(false);
  return (
<div style={{backgroundColor:"#F9FAFB"}}>
  {show===false ?( <Login setShow={setShow}/> ):(<Dashboard/>)}
</div>
  );
}

export default App;
