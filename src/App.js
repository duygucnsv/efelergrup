import React, { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import MenuBar from "./components/common/MenuBar";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";
import CustomRoutes from "./router/CustomRoutes";
import LoadingPage from "./pages/LoadingPage";
import { ToastContainer } from "react-bootstrap";

const App = () => {
  const [loading, setLoading] = useState(true);

  //  if(loading) return(<LoadingPage/>)
  //   else
  return (
    <BrowserRouter>
      <TopBar />
      <MenuBar />
      <CustomRoutes />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
