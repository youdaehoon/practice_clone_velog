import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";

import Detail from "./pages/detail";
import Main from "./pages/main";
import Write from "./pages/write";



const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
};

export default App;
