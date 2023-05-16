import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateStarterRequestPage from "./scenes/CreateStarterRequestPage";
import StarterRequests from "./scenes/StarterRequests";
import EditStarterRequest from "./scenes/EditStarterRequest";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* General Routes*/}
        <Route path="/" element={<CreateStarterRequestPage />} />
        <Route path="/all-requests" element={<StarterRequests />} />
        <Route path="/all-requests/edit/:id" element={<EditStarterRequest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
