import React from "react";

//custom hook nomenclatura useNombreHook
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    //resuleve peticiones asincronas q tardan tiempo
    //se puede asociar a un estado
    //evita q por cada renderizacion se llama esto
    //solo se llamara si cambia el estado asociado
    React.useEffect(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            }catch ( error ){
                setLoading(false);
                setError(true);
            }
    }, []); // [] hace q solo se llame 1 vez

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    //si hay mas de dos elementos se recomienda un objeto en vez de un array
    return {
        item, 
        saveItem, 
        loading, 
        error
    };
}

export { useLocalStorage };