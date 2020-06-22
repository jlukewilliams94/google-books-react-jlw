import React from "react"
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo center">Google Book Search</Link> 
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/saved'>Saved</Link></li>
                    </ul>
            </div>
        </nav>
    )

}

export default Nav;