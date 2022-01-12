import React from 'react'
import { Link } from 'react-router-dom'
import { CuadroConten1 } from '../contenedor1/CuadroConten1'
import { NavComponente } from '../nav/NavComponente'

import './aboutStyle.css'

export const About = () => {
    return (
        <>
            <div className='contenedor-about'>
                <div className='divNav'><NavComponente /></div>
                <div className='divCuadroConten1'>  <CuadroConten1/></div>
              
                <div className='divAbout'>
                    <div className="main-container-presentacion">
                        <div className="container-presentacion">
                            <div className="profile">
                            </div>
                            <div className="layer">
                            </div>
                            <div className="details">
                                <p>Santiago J Reyes Marin</p>
                                <p>Frond end developer</p>
                            </div>
                            <div className="skills">
                                <ul>
                                    <li className="img">JavaScript</li>
                                    <li className="img">TypeScript</li>
                                    <li className="img">React</li>
                                    <li className="img">React Native</li>
                                    <li className="img">Redux</li>
                                    <li className="img">CSS3</li>
                                    <li className="img">Html5</li>
                                </ul>
                            </div>
                            <div className="btn-presentacion">
                                <Link to={'/contact'}>Hire me</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divAbout-mensaje'>
                    <p>¡Hola! Soy Santiago, un desarrollador web auto motivado y una persona inspidada por mejorar la calidad del codigo 
                        en un aprendisaje constante. Trabajador comprometido en cumplir los plazos y las metas propuestas, si me contratara sería un gran placer para mí.
                    Actualmente estoy buscando oportunidades. Para ponerse en contacto envíeme un correo electrónico
                    </p>
                </div>
            </div>


        </>
    )
}
