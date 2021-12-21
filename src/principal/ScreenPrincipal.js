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
                
                </div>

                <div className='contenedor2'>

                    <ContentContenedor />
                </div>
            </div>

        </>
    )
}
