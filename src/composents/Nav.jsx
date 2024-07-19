import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Accueil</Link>
            </li>
            <li>
                <Link to='/fruits'>Fruits</Link>
            </li>
            <li>
                <Link to='/admin'>Admin</Link>
            </li>
        </ul>

    )
}

export default Nav