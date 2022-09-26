import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Second from './page/Second';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className='main-con'>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/second' element={<Second />}/>
        </Routes>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default App