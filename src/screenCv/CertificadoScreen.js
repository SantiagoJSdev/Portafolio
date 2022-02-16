import React from 'react'
import './certificado.css'
import { useCounter } from '../hook/UseConter'
import { dataCertificados } from './data-certificados/dataCertificados'

export const CertificadoScreen = () => {

const init = 0


const {counter, increment, decrement, reset, setCounter} = useCounter(init)
if ( (counter < 0 ) ) {
return reset()
} 
if ( (counter > 3 ) ) {
    return setCounter(3)
} 

    return (
        <>
                <div className='div-certificados'>
                            <div className='div-certificados-pega'>
                                <i className="fas fa-sort-down"></i>
                                <span>Certificados</span>
                            </div>


                             <div className='certificado-interno'>

                            {/* codigo nuevo///////////// */}

                            <section className='slider'>
                         
                                    <h2>{ dataCertificados[counter].name }</h2>
                                    <a href={dataCertificados[counter].url} target='blank' >
                                     <img 
                                     src={dataCertificados[counter].img}
                                     alt='img-curso'
                                     />
                                     </a>
                                     <div className='slider-icons'>
                                  
                                     <i 
                                     onClick={decrement}
                                     className="fas fa-chevron-left"></i>
                                     <i
                                     onClick={increment} className="fas fa-chevron-right"></i>
                                     
                                     </div>
                             
                               
                            </section>


                             {/* codigo nuevo///////////// */}

                            </div>
                        </div>
            
        </>
    )
}
