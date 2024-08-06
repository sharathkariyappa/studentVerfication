import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import LoginPage from "./components/login/LoginPage";
import StudentLogin from "./components/login/StudentLogin";
import InstituteLogin from "./components/login/InstituteLogin";
import RegisterPage from "./components/register/RegisterPage";
import StudentRegister from "./components/register/StudentRegister";
import InstituteRegister from "./components/register/InstituteRegister";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWindow">
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login/LoginPage" element={<LoginPage/>}/>
        <Route path="/login/StudentLogin" element={<StudentLogin/>}/>
        <Route path="/login/InstituteLogin" element={<InstituteLogin/>}/>
        <Route path="/register/RegisterPage" element={<RegisterPage/>}/>
        <Route path="/register/StudentRegister" element={<StudentRegister/>}/>
        <Route path="/register/InstituteRegister" element={<InstituteRegister/>}/>
       </Routes>

      </div>
    </div>
  ) 
}

export default App;
