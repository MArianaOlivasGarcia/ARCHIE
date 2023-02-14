

import logoWhite from '../../../assets/images/archie_logo_white.png'
import logoBlack from '../../../assets/images/archie_logo_black.png'

import { MenuItemNotExpand } from './MenuItemNotExpand'
import { MenuItemExpand } from './MenuItemExpand'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { getMenu } from '../../../data/menu'


export const Sidebar = () => {

  const { theme } = useSelector( (state: RootState) => state.setting ); 

  return (
    <div className="offcanvas offcanvas-start sidebarNav bg-dark border border-0 shadow" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <img className="image-logo" src={theme == 'light' ? logoBlack : logoWhite } style={{ width: '100%' }} />
      </div>

      <div className="offcanvas-body">
          
        <ul className="navbar-nav sidebarList">
          {
            getMenu(theme).map( item => (
              !item.children 
                ? <MenuItemNotExpand key={item.id} menuItem={item} />
                : <MenuItemExpand key={item.id} menuItem={item} />
            ))
          }
        </ul>

      </div>

    </div>
  )
}
