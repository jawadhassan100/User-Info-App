import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between ">
  <a className="navbar-brand" href="#">User Info</a>
  <div className=" d-flex justify-content-between" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
