import './App.css';
import { React } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/test'>Test</Link></li>
          <li><Link to='/users/1'>Users, Page 1</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/users/:id' element={<Users />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
