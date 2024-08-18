import React from 'react';  
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import LoginPage from "./components/login/LoginPage";
import AboutUs from "./components/about/AboutUs";
import StudentLogin from "./components/login/StudentLogin";
import InstituteLogin from "./components/login/InstituteLogin";
import Buycrypto from "./components/buy/crypto";
import CartPage from "./pages/CartPage";
import Swap from "./components/buy/cart";
import RegisterPage from "./components/register/RegisterPage";
import StudentRegister from "./components/register/StudentRegister";
import InstituteRegister from "./components/register/InstituteRegister";
import StudentProfile from "./components/profile/StudentProfile";
import InstituteProfile from "./components/profile/InstituteProfile";
import DocumentDetails from "./components/details/viewDocumentDetails";
import VerifyDocument from "./components/details/verifyDocument"
import UploadDocuments from "./components/details/uploadDocumentDetails";
import { Routes, Route } from 'react-router-dom';


import { useConnect, useAccount } from 'wagmi';
// import { walletConnect } from 'wagmi/connectors'

function App() {
  const {address, isConnected} = useAccount();
  const {connect}= useConnect();
  return (
    <div className="App">
      <Header connect={connect} isConnected={isConnected} address={address} />
      <div className="mainWindow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login/LoginPage" element={<LoginPage />} />
          <Route path="/login/StudentLogin" element={<StudentLogin />} />
          <Route path="/about/AboutUs" element={<AboutUs />} />
          <Route path="/profile/StudentProfile" element={<StudentProfile />} />
          <Route path="/profile/InstituteProfile" element={<InstituteProfile />} />
          <Route path="/login/InstituteLogin" element={<InstituteLogin />} />
          <Route path="/details/viewDocumentDetails/:studentId" element={<DocumentDetails />} />
          <Route path="/details/verifyDocument" element={<VerifyDocument/>} />
          <Route path="/details/uploadDocumentDetails" element={<UploadDocuments />} />
          <Route path="/register/RegisterPage" element={<RegisterPage />} />
          <Route path="/register/StudentRegister" element={<StudentRegister />} />
          <Route path="/register/InstituteRegister" element={<InstituteRegister />} />
          <Route path="/pages/CartPage" element={<CartPage />} />
          <Route path="/buy/crypto" element={<Buycrypto />} />
          <Route path="/buy/cart" element={<Swap isConnected={isConnected} address={address}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
