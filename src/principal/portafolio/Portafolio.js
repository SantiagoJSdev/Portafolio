import React from 'react'
import {dataPortafolio} from './dataPortafolio'

import { NavComponente } from '../nav/NavComponente'

import './portafoliStile.css'
import { ItemsProyect } from './ItemsProyect'

export const Portafolio = () => {

    // console.log(dataPortafolio[0].img)
    return (
        <>
            
            <div className='container-portafolio'>
                    <div className='container-portafolio-nav'>
                        <NavComponente/>
                    </div>
                    {/* <h1>Portafolio</h1> */}
                    <h1>See more Projects.</h1>
                    <p>Estos son algunos de los proyectos y app que he ido desarrollando, practicando en los
                        <br/>
                         que prima la constancia, el marcado y el desarrollo, evolucion de mis aplicaciones</p>
                    <div className='container-project'>

                        { dataPortafolio.map(item => (
                                 <ItemsProyect 
                                 key = {item.id}
                                 url = {item.url}
                                 descripcion = {item.descripcion}
                                 name = {item.name}
                                 img = {item.img}
                                 />
                        ))
                       
}
                    

                    </div>
            </div>
                
            
        </>
    )
}
