import * as React from 'react'
import {Link} from 'gatsby'
import {container, heading, navLinks, navLinkItem, navLInkText} from './layout.module.css'
const Layout =({pageTitle, children}) =>{
    return(
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to='/' className={navLInkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to='/about' className={navLInkText}>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout