import React from 'react'
import navimg from "../img/favicon.ico"

function Navbar(props) {
  let stobj={
    marginLeft:'10px',
    marginRight:'5px',
    width: '20px'
  }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`}>
          <img style={stobj} src={navimg} alt="" />
  <a className="navbar-brand" href="/">Edit-Text-Now</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">About</a>
      </li>
      
     
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar