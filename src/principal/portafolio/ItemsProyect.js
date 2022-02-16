
import React from 'react';


export const ItemsProyect = ({url, descripcion, name, img}) => {

 

  return <>
  
                    <div className='items-project'>
                        <a href={url} target= 'blank' >
                        <img src={`${img}` } alt='todoAppJavascript'/>
                        </a>
                        <h3>
                            {name}
                            <p>{descripcion}</p>
                        </h3>
                    </div>
  
  
  
  
  </>;
};
