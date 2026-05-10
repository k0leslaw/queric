import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';

import HomePage from './pages/HomePage';
import DataAnalysisPage from './pages/DataAnalysisPage/DataAnalysisPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/upload' element={ <Upload />}></Route>
          <Route path='/analysis' element={ <DataAnalysisPage /> }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
