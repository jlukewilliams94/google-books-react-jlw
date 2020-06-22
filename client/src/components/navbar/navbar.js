import React from "react"
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <div class="nav-wrapper">
                <Link to='/' class="brand-logo center">Google Book Search</Link> 
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/saved'>Saved</Link></li>
                    </ul>
            </div>
        </nav>
    )

}

export default Nav;