import './principalStyle.css'

import React from 'react'
import { NavComponente } from './nav/NavComponente'
import { ContentContenedor } from './contenedor2/ContentContenedor'
import { CuadroConten1 } from './contenedor1/CuadroConten1'
import { BotonPrincipal } from './contenedor1/BotonPrincipal'
import { FondoPortafolio } from './contenedor2/FondoPortafolio'
import { ArrowPortafolio } from './contenedor2/ArrowPortafolio'

export const ScreenPrincipal = () => {
    return (
        <>
            <div className='containerPrincipal'>
                <div className='nav'>
                    <NavComponente />
                </div>

                <div className='contenedor1'>
                    {/* <CuadroConten1/> */}
                    <div className='contenedor1-btn'>
                        <BotonPrincipal name={'Lastest Projects'} url = {'/portafolio'}/>
                        <BotonPrincipal name={'More About Me'} url = {'/about'}/>
                    </div>
                </div>

                <div className='contenedor2'>

                    <ContentContenedor />
                    <FondoPortafolio/>
                    <ArrowPortafolio/>
                </div>
            </div>

        </>
    )
}
