import React from 'react'
import { NavbarStyle } from './Molecules.style'
import { Link } from 'react-router-dom'
function Navbar({user}) {
  // console.log(user[0].name)
  return (
    <div>
      <NavbarStyle>
    <div className="navbar-section">
        <div className="navbar">
            <div className="logo-section">
                <h1>SIA</h1>
            </div>
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">{user ? user[0].name : <button class="btn"><a href=""><Link to="user-login">Login </Link></a></button>}</a></li>
                </ul>
            </div>
        </div>
        </div>
      </NavbarStyle>
    </div>
  )
}

export default Navbar
