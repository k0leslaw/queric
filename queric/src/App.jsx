import './App.css'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataAnalysisPage from './pages/DataAnalysisPage/DataAnalysisPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage /> }></Route>
          <Route path='/analysis' element={ <DataAnalysisPage /> }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
