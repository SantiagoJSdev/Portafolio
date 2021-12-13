import React from 'react'
import './educacion.css'

export const EducacionScreen = () => {
    return (
        <>
                        <div className='div-educacion-pega'>
                        <i className="fas fa-sort-down"></i>
                        <span>Educación</span>
                        </div>

                        <div className='div-educacion'>

                           
                            <div className='educacion-circulo'>
                                <div className='educacion-cuadro'></div>
                            </div>
                            <div className='educacion-circulo1'>
                                <div className='educacion-cuadro1'></div>
                            </div>
                            <div className='educacion-interno'>
                                <div className='educacionCaja1'>
                                    <h3>Universitaria:</h3>
                                    <div>Universitario de Tecnología Industrial Rodolfo Loero Arismendi, IUTIRLA.</div>
                                </div>
                                <div className='educacionCaja2'>
                                    <h3>Secundaria:</h3>
                                    <div>Técnico Medio En Informática, U.E "Maria Inmaculada" </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
