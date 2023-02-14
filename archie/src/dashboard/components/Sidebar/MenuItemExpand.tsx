import { FC, useEffect } from "react"
import { Link } from "react-router-dom"
import { MenuItem } from "../../interfaces/menu-item.interface"
import { SubMenuItemExpand } from "./SubMenuItemExpand"

interface Props {
    menuItem: MenuItem
}

export const MenuItemExpand: FC<Props> = ({ menuItem }) => {


    return (
        <li className="mb-1" style={{cursor: 'pointer'}}>
          <div 
              className="nav-link d-flex justify-content-between rounded border-0 collapsed"
              data-bs-toggle="collapse" 
              data-bs-target={`#${menuItem.id}-collapse`} aria-expanded="false">
            <div><img className='me-2' src={menuItem.icon} alt="ICON HOME" width={30} height={30} />{menuItem.title}</div>
            <span><i className="fa-solid fa-chevron-down fa-sm"></i></span>
          </div>
          <div className="collapse" id={`${menuItem.id}-collapse`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {
                    menuItem.children?.map( item => (
                    <li key={item.id}>

                        {
                            item.children 
                            ?  <SubMenuItemExpand menuItem={item} />
                            : <Link 
                                className="nav-link d-inline-flex text-decoration-none rounded ms-3"
                                to={item.path} 
                            ><span>{item.title}</span></Link>
                        }
                        
                    </li>
                    ))
                }
              
            </ul>
          </div>
        </li>
    )
}

// <Link 
//     className="nav-link d-flex justify-content-between align-items-center text-decoration-none rounded ms-3"
//     to={item.path} 
// ><span>{item.title}</span> <i className="fa-solid fa-chevron-down"></i></Link>