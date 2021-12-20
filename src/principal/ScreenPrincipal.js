import './principalStyle.css'

import React from 'react'
import { NavComponente } from './nav/NavComponente'
import { ContentContenedor } from './contenedor2/ContentContenedor'

export const ScreenPrincipal = () => {
    return (
        <>
            <div className='containerPrincipal'>
                <div className='nav'>
                    <NavComponente />
                </div>

                <div className='contenedor1'>
                    <div className='cuadroImagen1'><img src='./img/imagen1.jpg' alt='text1'/></div>
                    <div className='cuadroImagen2'><img src='./img/imagen1.jpg' alt='text1'/></div>
                    <div className='cuadroImagen3'><img src='./img/imagen1.jpg' alt='text1'/></div>
                    <div className='cuadroImagen4'><img src='./img/imagen1.jpg' alt='text1'/></div>
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
