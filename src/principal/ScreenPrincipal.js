import './principalStyle.css'

import React from 'react'
import { NavComponente } from './nav/NavComponente'

export const ScreenPrincipal = () => {
    return (
        <>
            <div className='containerPrincipal'>
                <div className='nav'>
                    {/* //////////////////navegacion /////////////////////////// */}
                    <NavComponente />
                    {/* //////////////////navegacion /////////////////////////// */}
                </div>
                <div className='contenedor1'>
                    <img src={'./img/26.jpg'} alt='text' />
                </div>
                <div className='contenedor2'>
                    {/* /////////////////nombre////////////////// */}
                    <div className='contenedor2Nombre'>
                        <div className='text primerNombre'>SANTIAGO</div>
                        <div className='text primerNombre2'>SANTIAGO</div>
                        <div className='segundoNombre'>REYES</div>
                    </div>
                    {/* /////////////////nombre////////////////// */}
                    {/* ///////////////////logos social media //////////////////////// */}
                    <div className='socialLado'>

                        <div className='marco'>
                            <i className="fab fa-github-alt ladoGitHub"></i>
                            <div className='palabraGitHub'>GitHub</div>
                        </div>

                        <div className='marco1'>
                            <i className="fab fa-linkedin-in ladoLinkedin"></i>
                            <div id='hola' className='palabraLinkedin'>Linkedin</div>
                        </div>

                        <div className='marco2'>
                            <i className="fab fa-instagram ladoInstagram"></i>
                            <div className='palabraInstagram'>Instagram</div>
                        </div>

                        <div className='marco3'>
                            <i className="fab fa-twitter ladoTwiter"></i>
                            <div className='palabraTwiter'>Twitter</div>
                        </div>
                    </div>
                    {/* <div className='socialPalabras'>
                    <div className='palabraGitHub'>GitHub</div>
                    <div className='palabraLinkedin'>Linkedin</div>
                    <div className='palabraInstagram'>Instagram</div>
                    <div className='palabraTwiter'>Twitter</div>
                </div> */}
                    {/* ///////////////////logos social media //////////////////////// */}

                </div>
            </div>

        </>
    )
}
