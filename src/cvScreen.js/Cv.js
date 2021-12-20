
import './main.css'
import React from 'react'

import { LogoTexto } from '../screenCv/LogoTexto'
import { DatoSuperior } from '../screenCv/DatoSuperior'
import { SocialCaja } from '../screenCv/SocialCaja'
import { CertificadoScreen } from '../screenCv/CertificadoScreen'
import { EducacionScreen } from '../screenCv/EducacionScreen'
import { Lenguaje } from '../screenCv/Lenguaje'
import { Contenedor3Skill } from '../screenCv/Contenedor3Skill'


export const Cv = () => {
    return (
        <>
            <div className='container'>
                <div className='marco10'>
                    <div className='logo'>SANTIAGO REYES</div>
                    <div className='logo2'>Front-End Developer</div>

                    <div className='cuadro10'>
                        <LogoTexto />
                    </div>

                    <div className='cuadro20'>

                        <div className='cajaMail'>
                            <DatoSuperior />
                        </div>
                        <div className='cajaSocial'>
                            <SocialCaja />
                        </div>
                    </div>
                    <div className='cuadro30'>

                        <EducacionScreen />
                        <CertificadoScreen />
                        <Contenedor3Skill />
                        <Lenguaje />

                    </div>
                </div>

            </div>
        </>
    )
}
