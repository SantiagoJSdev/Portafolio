
import React from 'react'
import './contentStyle.css'
import { SocialIconos } from './SocialIconos'


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
                        <div className='front-end'>Front-End Developer & Future Fullstack</div>
                    </div>
                    {/* /////////////////nombre////////////////// */}
                    {/* ///////////////////logos social media //////////////////////// */}
                    <div className='socialLado'>

                        <SocialIconos/>
                    </div>
        </>
    )
}
