import React, { useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Detail from "./pages/detail";
import Main from "./pages/main";
import Write from "./pages/write";

import RouteChangeTracker from "./router";

const App: React.FC = () => {
  RouteChangeTracker();
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
