import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/header.scss'
import {HashLink} from 'react-router-hash-link'
function Header() {
  return (
    <nav>
        <h1>SS clothing</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/#about"}>About</Link>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#brands"}>Brand</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header