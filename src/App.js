import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import LoginPage from "./components/login/LoginPage";
import StudentLogin from "./components/login/StudentLogin";
import InstituteLogin from "./components/login/InstituteLogin";
import RegisterPage from "./components/register/RegisterPage";
import StudentRegister from "./components/register/StudentRegister";
import InstituteRegister from "./components/register/InstituteRegister";
import StudentProfile from "./components/profile/StudentProfile";
import InstituteProfile from "./components/profile/InstituteProfile";
import DocumentDetails from "./components/details/viewDocumentDetails";
import UploadDocuments from "./components/details/uploadDocumentDetails";
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
        <Route path="/profile/StudentProfile" element={<StudentProfile/>}/>
        <Route path="/profile/InstituteProfile" element={<InstituteProfile/>}/>
        <Route path="/login/InstituteLogin" element={<InstituteLogin/>}/>
        <Route path="/details/viewDocumentDetails" element={<DocumentDetails/>}/>
        <Route path="/details/uploadDocumentDetails" element={<UploadDocuments/>}/>
        <Route path="/register/RegisterPage" element={<RegisterPage/>}/>
        <Route path="/register/StudentRegister" element={<StudentRegister/>}/>
        <Route path="/register/InstituteRegister" element={<InstituteRegister/>}/>
       </Routes>

      </div>
    </div>
  ) 
}

export default App;
