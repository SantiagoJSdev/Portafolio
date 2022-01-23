
import React from 'react';


export const ItemsProyect = ({url, descripcion, name, img}) => {

    console.log(url)

  return <>
  
                    <div className='items-project'>
                        <a href={url} target= '_blank' >
                        <img src={`${img}` } alt='todoAppJavascript'/>
                        </a>
                        <h3>
                            {name}
                            <p>{descripcion}</p>
                        </h3>
                    </div>
  
  
  
  
  </>;
};
