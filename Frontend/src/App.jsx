import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CoursesList from "./pages/CoursesList";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/course' element={<Home />} />
            <Route path='/coursesList' element={<CoursesList />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;