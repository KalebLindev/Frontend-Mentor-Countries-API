import React from 'react'
import './navBar.css'
let inDarkMode = true
const toggleDarkMode = () => {
  document.body.style.backgroundColor = inDarkMode
    ? //^ Eventually change this out for a func that has all the colors for things dark and light mode
      'hsl(0, 0%, 98%)'
    : 'hsl(207, 26%, 17%)'
  inDarkMode = !inDarkMode
}

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Where in the world?</li>
        <li onClick={toggleDarkMode}>🌙 Dark Mode</li>
      </ul>
    </nav>
  )
}

export default NavBar
