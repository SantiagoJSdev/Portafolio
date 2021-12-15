
import React from 'react'
import './navStyle.css'

export const NavComponente = () => {
    return (
        <>
              <div className='navMenu'>
                    <ul>
                        <li className='inicio'>Inicio</li>
                        <li className='sobreMi'>Sobre Mi</li>
                        <li className='Portafolio'>Portafolio</li>
                        <li className='cv'>Currículum</li>
                        <li className='contacto'>Contacto</li>
                        
                    </ul>
                </div>
                <div className='navLogo'>
                    <i className="fas fa-bars"></i>
                </div>
        </>
    )
}
