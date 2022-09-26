import React from 'react';
import logo from '../data/logoo.png';
import home from '../data/road.png';
import transfer from '../data/data-transfer.png';
import contract from '../data/contract.png';
import report from '../data/profit-report.png';
import printer from '../data/printer.png';
import file from '../data/file.png';
import world from '../data/world.png';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
  const NavLinkStyle = ({isActive}) => {
    
    return {
      backgroundColor: isActive ? '#000033' : '#262254'
    }
  }
  return (
    <div className='sidebar'>
      <img src={logo} alt="logo" width='40px' className='logo' />
      <ul className='menu'>
        <li ><NavLink end to='/' style={NavLinkStyle}  ><img src={home} alt="logo" width='40px' /></NavLink></li>
        <li><NavLink  to='/second' style={NavLinkStyle}><img src={transfer} alt="logo" width='40px' /></NavLink></li>
        <li><NavLink  to='/third' style={NavLinkStyle}><img src={contract} alt="logo" width='40px' /></NavLink></li>
        <li><NavLink  to='/fourth' style={NavLinkStyle}><img src={report} alt="logo" width='40px' /></NavLink></li>
        <li><NavLink  to='/fifth' style={NavLinkStyle}><img  src={printer} alt="logo" width='40px' /></NavLink></li>
        <li><NavLink  to='/sixth' style={NavLinkStyle}><img src={file} alt="logo" width='40px' /></NavLink></li>
        <li><NavLink  to='/seventh' style={NavLinkStyle}><img src={world} alt="logo" width='40px' /></NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar
