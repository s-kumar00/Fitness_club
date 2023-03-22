import React from 'react'
import './Nav.css'
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsIcon from '@mui/icons-material/Collections';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import {AiOutlineMessage} from 'react-icons/ai';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <NavLink to="/" className={({isActive}) => isActive? "active": undefined}><CottageIcon/></NavLink>
      <NavLink to="/about" className={({isActive}) => isActive? "active": undefined}><PersonIcon/></NavLink>
      <NavLink to="/gallery" className={({isActive}) => isActive? "active": undefined}><CollectionsIcon/></NavLink>
      <NavLink to="/plans" className={({isActive}) => isActive? "active": undefined}>< MiscellaneousServicesIcon/></NavLink>
      <NavLink to="/trainers" className={({isActive}) => isActive? "active": undefined}><SportsMartialArtsIcon/></NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive? "active": undefined}><AiOutlineMessage/></NavLink>
      {/* <NavLink to="/" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CottageIcon/></NavLink>
      <Link to="/about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><PersonIcon/></Link>
      <Link to="/contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><LaptopChromebookIcon/></Link>
      <Link to='/gallery' onClick={()=> setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}>< MiscellaneousServicesIcon/></Link>
      <Link to="/plans" onClick={()=> setActiveNav('#plans')} className={activeNav === '#plans' ? 'active' : ''}><AiOutlineMessage/></Link> */}
    </nav>
  )
}

export default Nav
