
import React from 'react'
import './socialIconosStyle.css'

export const SocialIconos = () => {
    return (
        <>
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
        </>
    )
}
