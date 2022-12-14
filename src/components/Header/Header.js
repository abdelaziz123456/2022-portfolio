import React from 'react'
import './Header.scss'
export default function Header() {
  return (

    <div className='header'>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid  ">
    <a className="navbar-brand  hovered-text ms-3" href="#">&lt; Abdelaziz  &frasl; &gt;</a>
    <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto ">
        <li className="nav-item ">
          <a className="nav-link active hovered-text" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link hovered-text" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link hovered-text" href="#work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link hovered-text" href='#contact'>Contact</a>
        </li>
        <li className="nav-item btn-special">
          <a className="nav-link  " href={process.env.PUBLIC_URL +'cv/abdelaziz mohamed .pdf'} target={'_blank'} download>Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>


  )
}
