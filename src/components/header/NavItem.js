import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({item}) => {
    return (
        <li key={item.id} className="text-gray-600 font-semibold transition-all hover:text-blue-600">
            <Link to={item.link} >{item.title}</Link>
        </li>
    )
}

export default NavItem