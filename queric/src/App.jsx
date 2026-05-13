import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import CompareWorkspace from './pages/CompareWorkspace/CompareWorkspace';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';

import HomePage from './pages/HomePage';
import DataAnalysisPage from './pages/DataAnalysisPage/DataAnalysisPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/compare-workspace' element={ <CompareWorkspace />}></Route>
          <Route path='/upload' element={ <Upload />}></Route>
          <Route path='/login' element={ <Login />}></Route>
          <Route path='/analysis' element={ <DataAnalysisPage /> }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
