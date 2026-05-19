import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import CompareWorkspace from './pages/CompareWorkspace/CompareWorkspace';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/compare-workspace' element={ <CompareWorkspace />}></Route>
          <Route path='/upload' element={ <Upload />}></Route>
          <Route path='/login' element={ <Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
