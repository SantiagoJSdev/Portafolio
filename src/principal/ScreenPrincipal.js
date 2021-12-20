import './principalStyle.css'

import React from 'react'
import { NavComponente } from './nav/NavComponente'
import { ContentContenedor } from './contenedor2/ContentContenedor'
import { CuadroConten1 } from './contenedor1/CuadroConten1'

export const ScreenPrincipal = () => {
    return (
        <>
            <div className='containerPrincipal'>
                <div className='nav'>
                    <NavComponente />
                </div>

                <div className='contenedor1'>
                    <CuadroConten1/>
                    {/* <div className='cuadroImagen5'>5</div>
                    <div className='cuadroImagen6'>6</div>
                    <div className='cuadroImagen7'>7</div>
                    <div className='cuadroImagen8'>8</div> */}
                    
                    {/* <img className='img' src={'./img/26.jpg'} alt='text' /><div className='cuadro'></div> */}
                </div>

                <div className='contenedor2'>

                    <ContentContenedor />
                </div>
            </div>

        </>
    )
}
