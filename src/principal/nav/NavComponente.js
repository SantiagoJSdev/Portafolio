
import React from 'react'
import { Link } from 'react-router-dom'
import './navStyle.css'

export const NavComponente = () => {
    return (
        <>
              <div className='navMenu'>
                    <ul>
                        <li className='inicio'><Link className='link color' to={'/'}>Inicio</Link></li>
                        <li className='sobreMi'><Link className='link'  to={'/about'}>Sobre Mi</Link></li>
                        <li className='Portafolio'><Link className='link'  to={'/portafolio'}>Portafolio</Link></li>
                        <li className='cv'><Link className='link'  to={'/cv'}>Currículum</Link></li>
                        <li className='contacto'><Link className='link'  to={'/contact'}>Contacto</Link></li>
                        
                    </ul>
                </div>
                <div className='navLogo'>
                    <i className="fas fa-bars"></i>
                </div>
        </>
    )
}
