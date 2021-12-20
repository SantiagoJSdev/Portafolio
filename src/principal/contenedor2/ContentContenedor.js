
import React from 'react'
import './contentStyle.css'

export const ContentContenedor = () => {
    return (
        <>
            <div className='contenedor2Nombre'>
                        <div className='complemento'>
                            <span><i className="fas fa-code"></i></span>
                            
                            <h1>I'm</h1>
                        </div>
                        <div className='text primerNombre'>SANTIAGO</div>
                        <div className='text primerNombre2'>SANTIAGO</div>
                        <div className='segundoNombre'>REYES</div>
                        <div className='front-end'>Front-end Developer & future Fullstack</div>
                    </div>
                    {/* /////////////////nombre////////////////// */}
                    {/* ///////////////////logos social media //////////////////////// */}
                    <div className='socialLado'>

                        <div className='marco'>
                           <a href='https://github.com/SantiagoJSdev' target={'blank'}><i className="fab fa-github-alt ladoGitHub"></i></a>
                            <div className='palabraGitHub'><a href='https://github.com/SantiagoJSdev' target={'blank'}>GitHub</a></div>
                        </div>

                        <div className='marco1'>
                            <a href='https://www.linkedin.com/in/santiagoa31219/' target={'blank'}><i className="fab fa-linkedin-in ladoLinkedin"></i></a>
                            <div className='palabraLinkedin'><a href='https://www.linkedin.com/in/santiagoa31219/' target={'blank'}>Linkedin</a></div>
                        </div>

                        <div className='marco2'>
                            <a href='https://www.instagram.com/santiagojoserm/' target={'blank'}><i className="fab fa-instagram ladoInstagram"></i></a>
                            <div className='palabraInstagram'><a href='https://www.instagram.com/santiagojoserm/' target={'blank'}>Instagram</a></div>
                        </div>

                        <div className='marco3'>
                            <a href='https://twitter.com/SantiagoJSdev' target={'blank'}><i className="fab fa-twitter ladoTwiter"></i></a>
                            <div className='palabraTwiter'><a href='https://twitter.com/SantiagoJSdev' target={'blank'}>Twitter</a></div>
                        </div>
                    </div>
        </>
    )
}
