import React from 'react';
import { Dinamicas } from '../Dinamicas';

const DinamicasRender = () => {
  const props = {
    cubetas: 2, // Reemplaza con el valor deseado
    registros: 2, // Reemplaza con el valor deseado
    densidadOcupacion: 70, // Reemplaza con el valor deseado
    densidadReduccion: 30, // Reemplaza con el valor deseado
    hash: 1, // Reemplaza con el valor deseado
  };

  return (
    <Dinamicas {...props}></Dinamicas>
  );
};

export { DinamicasRender };
