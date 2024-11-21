import React from 'react';

export default function Animal({animal,onAnimalClick}){
    return(
        <img src={animal.image} alt={animal.name}
         onClick={()=> onAnimalClick(animal)}
         style={{width:'100px',height:'100px',margin:'10px',cursor: 'pointer'}}
         />
    );
}