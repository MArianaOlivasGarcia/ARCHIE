import { FC } from "react"
import { Link } from "react-router-dom"
import { MenuItem } from "../../interfaces/menu-item.interface"


interface Props {
    menuItem: MenuItem
}

export const SubMenuItemExpand:FC<Props> = ({ menuItem }) => {
  return (
    <>
        <div 
            className="nav-link d-flex ms-3 justify-content-between align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse" 
            data-bs-target={`#${menuItem.id}-collapse`} aria-expanded="false">
            <span>{ menuItem.title }</span>
            <i className="fa-solid fa-chevron-down fa-sm"></i>
        </div>
        
        <div className="collapse" id={`${menuItem.id}-collapse`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {
                    menuItem.children?.map( item => (
                    <li key={item.id}>
                        {
                            <Link 
                                className="nav-link d-inline-flex text-decoration-none rounded ms-4"
                                to={item.path} 
                            >{item.title}</Link>
                        }
                        
                    </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
