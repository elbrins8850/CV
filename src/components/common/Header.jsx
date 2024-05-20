import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../data/dummydata'
import logo from '../data/images/logo.png'
import{Menu}from"@mui/icons-material"
export const Header = () => {
  let [responsive,setResponsive] = useState(false)
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt='logo' data-aos="zoom-in-right"/>

          </div>

          <div className={responsive ? "hideMenu": "nav"}>
            {navlink.map((link,i)=>{
             return( 
              <Link to={link.url}key={i} data-aos="zoom-in-left">{link.text}</Link>
            )
            })}
          </div>
            <button className='toggle' onClick={()=> setResponsive(!responsive)}>
              <Menu className='icon'></Menu>
            </button>
        </div>
      </header>
    </>
  )
}
