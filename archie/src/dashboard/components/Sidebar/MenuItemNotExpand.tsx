import { FC, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { MenuItem } from "../../interfaces/menu-item.interface"


interface Props {
    menuItem: MenuItem
}

export const MenuItemNotExpand:FC<Props> = ({ menuItem }) => {

    // useEffect(() => {
    //     console.log(menuItem)
    // }, [menuItem])

    return (
        <li className="nav-item">
            <NavLink 
                className="nav-link" 
                to={menuItem.path}
                // style={({ isActive }) =>
                //     isActive ? activeStyle : undefined
                // }
            >
                <span><img className='me-2' src={menuItem.icon} alt="ICON HOME" width={30} height={30} /> {menuItem.title}</span>
            </NavLink>
        </li>
    )
}
