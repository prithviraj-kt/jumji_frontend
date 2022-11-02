import Login from "./Components/Login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter className="App">
    {/* <ClickSidebar/> */}
    <Routes>
      
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/home/:id" element={<Home/>} />


      {/* <Route component={NotFound}/> */}
    </Routes>
  </BrowserRouter>

  );
}

export default App;
