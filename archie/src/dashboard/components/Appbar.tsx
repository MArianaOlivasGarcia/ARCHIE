import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { AppDispatch, RootState } from "../../store";
import { startSignOut } from "../../store/auth/thunks";
import { startChangeTheme } from "../../store/setting/thunks";


export const Appbar = () => {


    const dispatch = useDispatch<AppDispatch>();

    const { theme } = useSelector( (state: RootState) => state.setting ); 
    const { user } = useSelector( (state: RootState) => state.auth ); 

    const hangleOnChange = ( event: any ) => {
        dispatch( startChangeTheme( event.target.checked ? 'dark' : 'light' ) )
    }

  return (
    <nav className="navbar navbar-expand bg-dark fixed-top shadow-sm">
        <div className="container-fluid">

        <a className="d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="fa-solid fa-bars"></i>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>




        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="d-flex align-items-center me-3">
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="sw">
                            {
                                theme === 'dark' ? <i className="fa-solid fa-moon fa-lg"></i> : <i className="fa-solid fa-sun fa-lg"></i>
                            }
                        </label>
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="sw"
                            checked={ theme === 'dark' ? true : false }
                            onChange={ hangleOnChange } />
                    </div>
                </li>
            
                <li className="me-2 d-none d-md-block">
                    <input  
                        className="form-control"
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"/>
                </li>

                {/* <li className="nav-item me-2">
                    <Link className="nav-link text-warning" to="/auth/login">Sing in</Link>
                </li>

                <li className="me-2"> 
                    <Link to="/auth/register"  className="btn btn-outline-warning">Sing up</Link>
                </li> */}

                {/* <li className="nav-item dropdown">
                    <a className="text-white nav-link dropdown-toggle d-flex justify-content-center align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                        <div className='d-flex align-items-center me-2'>
                            <img 
                                className="me-2"
                                style={{ borderRadius: '100%' }}
                                width={30}
                                height={30}
                                src="https://hope.be/wp-content/uploads/2015/05/no-user-image.gif" 
                                alt="" />
                            <small style={{ fontSize: '12px'}}>{ user?.email }</small>
                        </div>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end shadow animate__animated  animate__flipInY" aria-labelledby="navbarDropdown">
                        <li><a href="/perfil" className="dropdown-item">Mi Perfil</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li ><button className="dropdown-item"><i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Cerrar sesión</button></li>
                    </ul> 
                </li> */}

                <li className="me-2"> 
                    <button className="btn btn-outline-warning" onClick={() => dispatch( startSignOut() )} >Sing out</button>
                </li>
            
            </ul>
            
        </div>



        </div>
    </nav>
  )
}
