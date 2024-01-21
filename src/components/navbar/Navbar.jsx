import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
          <AccountCircleRoundedIcon className='avatar'/>
          </div>
        
      </div>
    </div>
  )
}

export default Navbar
