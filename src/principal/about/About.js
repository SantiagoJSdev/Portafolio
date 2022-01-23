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
                    <p>¡Hola! Soy Santiago, desarrollador web auto motivado y una persona inspirada por mejorar la calidad del codigo
                        en un aprendisaje constante.
                        
                        
                        Desde que comencé mi carrera como desarrollador web, he acumulado conocimientos y experiencia en
                        diseñar, desarrollar, probar y mejorar mis aplicaciones y sitios web, me enfoco en un estilo
                        de trabajo colaborativo y en un ritmo de trabajo acelerado, todo esto también gracias a mi motivación
                        durante mucho tiempo, tambien al bootcamp intensivo soy Henry en cual curse y fue una bonita
                        experiencia y de gran aprendizaje, ademas e realizado varios curso de Udemy, mis habilidades están enfocadas en marcado HTML5, CSS3, JS, REACT,
                        REDUX, todo el desarrollo web. Quisiera cubrir una posición en procesos de front-end con Javascript
                        usando React y back-end en Node JS. Encontrará que soy un solucionador de problemas analítico y
                        curioso con un enfoque en el aprendizaje continuo y en mantenerme actualizado en nuevas tecnologías.
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
