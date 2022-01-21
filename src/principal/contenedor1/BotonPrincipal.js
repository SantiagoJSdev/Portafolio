import React from 'react';
import { useNavigate } from 'react-router-dom';
import './botonStyle.css'


export const BotonPrincipal = ({name, url}) => {
    const navigate = useNavigate()
    const handleBtn = () => {
        navigate(url)
    }
  return <div>
            <button 
            onClick={handleBtn}
            className='botonPrincipal-1'
            >{name}
            </button>

        </div>;
};
