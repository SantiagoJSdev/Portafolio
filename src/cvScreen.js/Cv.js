
import './main.css'
import React from 'react'

import { LogoTexto } from '../screenCv/LogoTexto'
import { DatoSuperior } from '../screenCv/DatoSuperior'
import { SocialCaja } from '../screenCv/SocialCaja'
import { CertificadoScreen } from '../screenCv/CertificadoScreen'
import { EducacionScreen } from '../screenCv/EducacionScreen'
import { Lenguaje } from '../screenCv/Lenguaje'
import { Contenedor3Skill } from '../screenCv/Contenedor3Skill'
import { useNavigate } from 'react-router-dom'


export const Cv = () => {

    const navigate = useNavigate()
    const hanledCv = () => {
        navigate('/')
    }

    return (
        <>

            <div className='container-body'>
            <div className='container'>
                <div className='marco10'>
                    <div className='btn-cv'>

                        <div onClick={hanledCv} class="arrow">

                        </div>
                        
                    </div>
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
            <button className='botonCv-1 '> <a download target={'blank'} href={'https://github.com/SantiagoJSdev/portafolio/files/8056486/Curriculum.4.pdf'}>Downloader</a> </button>
            </div>
        </>
    )
}
