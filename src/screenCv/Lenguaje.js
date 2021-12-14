import React from 'react'
import './lenguajeStyle.css'

export const Lenguaje = () => {
    return (
        <>
            <div className='div-contenedor4'>

                <div className='div-contenedor4-pega'>
                    <i className="fas fa-sort-down"></i>
                    <span>Lenguaje</span>
                </div>

                <div className='contenedor4-interno'>
                    <div className='contenedor4-circulo'>
                        <img src={'./img/bandera.jpg'} alt='text' className='contenedor4-cuadro' />
                    </div><h2 className='contenedor4-h2'>English A2</h2>
                </div>
            </div>
        </>
    )
}
