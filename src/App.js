
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Component/Form'
import Home from './Component/Home'
import Submit from './Component/Submit'
import Ui from './Component/Ui';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/formsubmit' element={<Submit />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;