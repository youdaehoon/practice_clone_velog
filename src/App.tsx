import React, { useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import MainHeader from "./pages/main/header";
import Detail from "./pages/detail";
import Main from "./pages/main";
import Write from "./pages/write";
import Header from "./components/ui/Header";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  let { pathname } = useLocation();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
};

export default App;
