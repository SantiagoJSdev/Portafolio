
import React from 'react';
import './arrowStyles.css'

export const ArrowPortafolio = () => {
  return <>
                <div className='container-arrow'>

                    <div className='body-arrow'>
                        <div className='circle data1'><h1>JAVASCRIPT</h1></div>
                        <div className='circle data2'><h1>CSS3</h1></div>
                        <div className='circle data3'><h1>HTML5</h1></div>
                        <div className='icons'>
                            <i class="fab fa-react icons-react"></i>
                            <div className='icons-css'><i class="fab fa-css3"></i></div>
                            <div className='icons-code'>  <i class="fas fa-code "></i></div>
                          
                        </div>
                    </div>

                    <div className='body-arrow-1'>
                        <div className='circle data4'><h1>REDUX</h1></div>
                        <div className='circle data5'><h1>REACT</h1></div>
                        <div className='icons'>
                            <div className='icons-code-branch'> <i class="fas fa-code-branch"></i></div>
                            <div className='icons-file-code'> <i class="far fa-file-code"></i></div>
                            <div className='icons-android'> <i class="fab fa-android"></i></div>
                            
                         
                        </div>
                       
                    </div>

                    <div className='body-arrow-2'>
                        <div className='circle data6'><h1>TYPESCRIPT</h1></div>
                        <div className='icons-cogs'> <i class="fas fa-cogs"></i></div>
                        
                    </div>
                    
                </div>
               

        </>;
};
