import React from 'react'
import skills from '../images/skills.png'

function Nav() {
    return(
        <nav className="navbar navbar-light bg-light">
            <h3>
              <a className="navbar-brand" href="/">
              <img src={skills} width="50" height="50" alt="" loading="lazy"></img> TODO
              </a>
            </h3>
        </nav>
            
    )
}

export default Nav