import React from 'react';
import police from '../data/Police_RS.png';
import avatar from '../data/avatar.jpg';
import active from '../data/active.png';
import { Typography, Stack } from '@mui/material';
import { MdKeyboardArrowDown } from 'react-icons/md';

import '../App.css'

const Navbar = () => {
  return (
    <div className='nav-con'>
        <div className='nav-logo'>
        <img src={police}  alt='police logo' width="45px"/>
        <span className='pu' fontWeight='600' fontSize='26px'>
                PU
        </span>
        <span className='bl' fontWeight='600' fontSize='26px'>
                BANJA LUKA
        </span>
        </div>
        <div className='nav-user'>
            <img className='img-profile notif' src={active} alt="active" />
            <img className='img-profile' src={avatar} alt="avatar" />
            <span className='name-profile'>Marko Markovic</span>
            <MdKeyboardArrowDown className='arrow' />
        </div>
    </div>
  )
}

export default Navbar