// IndexContext.jsx
import { useLocalStorage } from './useLocalStorage';
import React, { useState, createContext } from 'react';


const IndexContext = createContext();

function UserProvider({ children }) {

  const [numRegistros, setNumRegistros] = useState(0);
  const [longitudRegistros, setLongitudRegistro] = useState(0);
  const [longitudIndice, setLongitudIndice] = useState(0);
  const [tamBloque, setTamBloque] = useState(0);
  const [tipoIndice, setTipoIndice] = useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [formValido, setFormValido] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  const {
    item: registros,
    saveItem: saveregistros,
    loading,
    error,
  } = useLocalStorage('Registros', []);

  const addStep = () => {
    var registro ={

      "numRegistros": numRegistros,
      "longitudRegistros": longitudRegistros,
      "tamBloque": tamBloque,
      "longitudIndice": longitudIndice,
      "tipoIndice":tipoIndice,

    };
    saveregistros(registro);

  };

  return (
    <IndexContext.Provider value={{
      numRegistros,
      setNumRegistros,
      longitudRegistros,
      setLongitudRegistro,
      tamBloque,
      setTamBloque,
      tipoIndice,
      setTipoIndice,
      openModal,
      setOpenModal,
      formValido,
      setFormValido,
      formError,
      setFormError,
      longitudIndice,
      setLongitudIndice,
      addStep,
      registros
    }}>
      {children}
    </IndexContext.Provider>
  );
};

export { IndexContext, UserProvider };


// const defaultTodos = {
//  numRegistros: '250000', longitudRegistros: '150', tamBloque: '8192', tipoIndice: '1', longitudIndice: '15'
// };

// localStorage.setItem('Registros', JSON.stringify(defaultTodos));
// localStorage.removeItem('Registros');