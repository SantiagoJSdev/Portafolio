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
                <div className='divCuadroConten1'>  <CuadroConten1 /></div>

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
                    <h1>More About Me</h1>
                    <p>¡Hola! Soy Santiago, apacionado y motivado en el desarrollador web, me encuentro en un aprendisaje constante. Desde que comencé mi carrera he adquirido habilidades y experiencia en
                        diseñar, desarrollar, probar y mejorar mis aplicaciones y sitios web, realizando varios curso en Udemy, fortalecindo mis conocimientos en el Bootcamp intensivo Henry como Full Stack Web Developer, mis habilidades están enfocadas en marcado HTML5, CSS3, JS, REACT,
                        REDUX, todo el desarrollo web. Quisiera cubrir una posición en procesos de front-end con Javascript
                        usando React y back-end en Node JS. Soy curioso y una persona enfocada en mantenerse actualizado en nuevas tecnologías.
                        <br></br>
                        <br></br>
                        Si me contratara sería un gran placer para mí.
                            Actualmente estoy buscando oportunidades. Para ponerse en contacto envíeme un <span><Link to={'/contact'}>correo electrónico</Link></span>
                    </p>
                </div>
            </div>


        </>
    )
}
