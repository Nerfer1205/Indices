import React from 'react';
import { DinamicasParciales } from '../DinamicasParciales'; 

const DinamicasRenderParciales = () => {
  const props = {
    cubetas: 2, // Reemplaza con el valor deseado
    registros: 2, // Reemplaza con el valor deseado
    densidadOcupacion: 70, // Reemplaza con el valor deseado
    densidadReduccion: 30, // Reemplaza con el valor deseado
    hash: 1, // Reemplaza con el valor deseado
    digitos: 3,
  };

  return (
    <DinamicasParciales {...props}></DinamicasParciales>
  );
};

export { DinamicasRenderParciales };
