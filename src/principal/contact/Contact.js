import React from 'react'
import { NavComponente } from '../nav/NavComponente'
import './contactStyle.css'

export const Contact = () => {
    return (
        <div>
            <div className='containe-contact'>
                <div className='containe-contact-1'>
                    
                </div>
                <div className='containe-contact-2'>
                    <div className='containe-contact-2-interno'>
                        <NavComponente/>
                    </div>
                    <div className='containe-contact-2-interno1'>
                        <div className='interno1-contact'>
                            <div>
                                <h1 className='h1-interno'>Hello..</h1>
                                <div className='span-interno'><span>Contact me! <span>santiagoreyesmarin1986@gmail.com</span></span></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='containe-contact-3'></div>
                </div>
                
            </div>
        </div>
    )
}
