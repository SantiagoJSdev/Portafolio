import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cv } from '../cvScreen.js/Cv';
import { About } from '../principal/about/About';
import { Contact } from '../principal/contact/Contact';
import { Portafolio } from '../principal/portafolio/Portafolio';
import { ScreenPrincipal } from '../principal/ScreenPrincipal';

export const RouterApp = () => {
    return (
        <>
        <BrowserRouter>
            {/* <NavComponente/> */}
            <Routes>
                <Route path = '/' element={<ScreenPrincipal/>}/>
                <Route path = '/about' element={<About/>}/>
                <Route path = '/portafolio' element={<Portafolio/>}/>
                <Route path = '/contact' element={<Contact/>}/>
                <Route path = '/cv' element={<Cv/>}/>
            </Routes>
        </BrowserRouter>
            
        </>
    )
}
