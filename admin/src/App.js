import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import Logout from "./pages/Logout";
import Enquiry from "./pages/Enquiry";
import ShowStudent from "./pages/ShowStudent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepages role="Admin" />} />
        <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
        <Route path="/AdminDashboard" element={<AdminDashboard role="Admin" />} />
          <Route path="/Homepages" element={<Homepages/>}></Route>
          <Route path="/Student/enquiry" element={<Enquiry/>}></Route>
          <Route path="/showStudent" element={<ShowStudent/>}></Route>
          
          
          {/* <Route path="/logo" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/deshboard" element={<Desboard/>}></Route> */}
          {/* <Route path="/Enquiry" element={<Enquiry/>}></Route>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;


