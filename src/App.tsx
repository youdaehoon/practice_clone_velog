import React from 'react';
import {Route,Routes} from"react-router-dom"

import Detail from './pages/detail';
import Main from './pages/main';
import Write from './pages/write';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/write' element={<Write/>}/>
    </Routes>
  );
}

export default App;
