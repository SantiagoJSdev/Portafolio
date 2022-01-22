
import React from 'react'
import './socialCaja.css'

export const SocialCaja = () => {
    return (
        <>

            <div className='container-social-1'>
                 <div className='social-1'>
                        <div className='cajaSocial-1'>
                            <a 
                            href='https://www.instagram.com/santiagojoserm/'
                             target='blank'
                             >santiagojoserm/
                            </a>
                        </div>
                        <i className="fab fa-instagram"></i>                      
                    </div>

                    <div className='social-2'>
                        <div className='cajaSocial-2'>
                            <a 
                            href='https://www.linkedin.com/in/santiagoa31219/'
                             target='blank'
                             >santiagoa31219/
                            </a>
                        </div>
                        <i className="fab fa-linkedin-in"></i>                   
                    </div>

                    <div className='social-3'>
                        <div className='cajaSocial-3'>
                            <a 
                            href='https://twitter.com/SantiagoJSdev'
                             target='blank'
                             >SantiagoJSdev
                            </a>
                        </div>
                        <i className="fab fa-twitter"></i>                  
                    </div>
                </div>
        </>
    )
}
