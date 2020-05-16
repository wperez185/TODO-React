import React from 'react'
import skills from '../images/skills.png'

function Nav() {
    return(
        <nav class="navbar navbar-light bg-light">
            <h3>
              <a class="navbar-brand" href="/">
              <img src={skills} width="50" height="50" alt="" loading="lazy"></img> TODO
              </a>
            </h3>
        </nav>
            
    )
}

export default Nav