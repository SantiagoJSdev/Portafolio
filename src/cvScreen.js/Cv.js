
import './main.css'
import React from 'react'
import { LogoTexto } from '../screen/LogoTexto'
import { DatoSuperior } from '../screen/DatoSuperior'
import { SocialCaja } from '../screen/SocialCaja'
import { CertificadoScreen } from '../screen/CertificadoScreen'
import { EducacionScreen} from '../screen/EducacionScreen'

export const Cv = () => {
    return (
        <>
            <div className='container'>
                <div className='marco'>
                    <div className='logo'>SANTIAGO REYES</div>
                    <div className='logo2'>Front-End Developer</div>

                    <div className='cuadro1'>
                        <LogoTexto />
                    </div>

                    <div className='cuadro2'>

                        <div className='cajaMail'>
                            <DatoSuperior />
                        </div>
                        <div className='cajaSocial'>
                            <SocialCaja />
                        </div>
                    </div>

                    <div className='cuadro3'>
                        
                        <EducacionScreen/>

                        <CertificadoScreen/>
                        <div className='div-contenedor3'>

                            <div className='div-contenedor3-pega'>
                            <i className="fas fa-sort-down"></i>
                            <span>Skills</span>
                            </div>

                            <div className='contenedor3-interno'></div>
                        </div>
                        <div className='div-contenedor4'>

                            <div className='div-contenedor4-pega'>
                            <i className="fas fa-sort-down"></i>
                            <span>Lenguaje</span>
                            </div>

                        <div className='contenedor4-interno'></div>
                        </div>

                        {/* <div className='div-skills'></div>
                        <div className='div-hobbies'></div>
                        <div className='div-lenguaje'></div> */}
                    </div>
                </div>

            </div>
        </>
    )
}
