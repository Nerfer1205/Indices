import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Dinamicas(props) {
    const [estructura, setEstructura] = useState([]);
    const [cubetas, setCubetas] = useState(props.cubetas);
    const [registros, setRegistros] = useState(props.registros);
    const [valorInput, setValorInput] = useState('');

    useEffect(() => {
        setEstructura(Array.from({ length: cubetas }, () => Array.from({ length: registros }, () => -1)));
    }, [cubetas, registros]);

    const hashMod = (key, tam) => {
        return key % tam;
    }

    const hashCuadrado = (key, tam) => {
        return (key * key) % tam;
    }

    const hashTrunc = (key, tam) => {
        if (key > tam) {
            return key % tam;
        } else {
            return key;
        }
    }

    const hashPleg = (numero, tam) => {
        const primerosDigitos = Math.floor(numero / 100);
        const ultimosDigitos = numero % 100;
        return (primerosDigitos + ultimosDigitos) % tam;
    }

    const verificarDensidadReduccion = () => {
        let ocupados = 0;
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (estructura[i][j] !== -1) {
                    ocupados++;
                }
            }
        }
        const densidadActual = (ocupados * 100) / (cubetas * registros);
        return densidadActual <= props.densidadReduccion;
    };

    const verificarDensidadExpansion = () => {
        let ocupados = 0;
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (estructura[i][j] !== -1) {
                    ocupados++;
                }
            }
        }
        const densidadActual = (ocupados * 100) / (cubetas * registros);
        return densidadActual >= props.densidadOcupacion;
    };

    const matrizLlena = () => {
        let lleno = true;
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (estructura[i][j] === -1) {
                    lleno = false;
                }
            }
        }
        return lleno;
    };

    const expandir = () => {
        const matrizTemp = estructura.map((cubeta) => cubeta.slice());
    
        // Duplica la matriz en la temporal
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (matrizTemp[i][j] !== -1) {
                    matrizTemp[i][j] = estructura[i][j];
                }
            }
        }
    
        // Actualiza la cantidad de cubetas después de expandir
        const newCubetas = cubetas * 2;
        setCubetas(newCubetas);
    
        // Se transforma nuevamente en la original
        for (let i = 0; i < newCubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (matrizTemp[i] && matrizTemp[i][j] !== -1) {
                    const key = matrizTemp[i][j];
                    const insercion = insert(key);
                    if (!insercion && !matrizLlena()) {
                        console.log("colisión");
                    }
                }
            }
        }
    }
    

    const reducir = () => {
        const matrizTemp = estructura.map((cubeta) => cubeta.slice());

        // Duplica la matriz en la temporal
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (matrizTemp[i][j] !== -1) {
                    matrizTemp[i][j] = estructura[i][j];
                }
            }
        }

        // Se limpia la original
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                estructura[i][j] = -1;
            }
        }

        // Se transforma nuevamente en la original
        setCubetas(cubetas / 2);

        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (matrizTemp[i] && matrizTemp[i][j] !== -1) {
                    const insercion = insert(matrizTemp[i][j]);
                    if (!insercion && !matrizLlena()) {
                        console.log("colisión");
                    }
                }
            }
        }

        // Actualiza la matriz con los nuevos valores
        setEstructura(matrizTemp);
    };

    const search = (key) => {
        for (let i = 0; i < cubetas; i++) {
            for (let j = 0; j < registros; j++) {
                if (estructura[i][j] === key) {
                    return true; // Elemento encontrado
                }
            }
        }
        return false; // Elemento no encontrado
    };

    const eliminar = (key) => {
        let cubeta;
        switch (props.hash) {
            case 1:
                cubeta = hashMod(key, cubetas);
                break;
            case 2:
                cubeta = hashCuadrado(key, cubetas);
                break;
            case 3:
                cubeta = hashTrunc(key, cubetas);
                break;
            case 4:
                cubeta = hashPleg(key, cubetas);
                break;
        }

        let eliminado = false;
        for (let i = 0; i < registros; i++) {
            if (estructura[cubeta][i] === key) {
                estructura[cubeta][i] = -1;
                eliminado = true;
                break;
            }
        }

        if (eliminado) {
            if (verificarDensidadReduccion()) {
                reducir();
            }
        }
        return eliminado;
    };

    const insert = (key) => {
        let repetido;

        do {
            // Verificar si la clave ya está repetida
            repetido = search(key);
            if (repetido) {
                // Lógica para ingresar una clave diferente en React
            }
        } while (repetido);

        if (verificarDensidadExpansion()) {
            expandir();
        }

        let cubeta;
        switch (props.hash) {
            case 1:
                cubeta = hashMod(key, cubetas);
                break;
            case 2:
                cubeta = hashCuadrado(key, cubetas);
                break;
            case 3:
                cubeta = hashTrunc(key, cubetas);
                break;
            case 4:
                cubeta = hashPleg(key, cubetas);
                break;
        }

        let insertado = false;
        for (let i = 0; i < registros; i++) {
            if (estructura[cubeta][i] === -1) {
                estructura[cubeta][i] = key;
                insertado = true;
                break;
            }
        }

        return insertado;
    };

    const handleInsert = () => {
        const valor = parseInt(valorInput);
        if (!isNaN(valor)) {
            insert(valor);
            setValorInput(''); // Limpiar el input
        } else {
            alert('Por favor, ingresa un valor numérico válido.');
        }
    };

    // Función para manejar la eliminación de un valor
    const handleDelete = () => {
        const valor = parseInt(valorInput);
        if (!isNaN(valor)) {
            if (eliminar(valor)) {
                setValorInput(''); // Limpiar el input
            } else {
                alert(`El valor ${valor} no se encontró en la estructura.`);
            }
        } else {
            alert('Por favor, ingresa un valor numérico válido.');
        }
    };

    function renderizarEstructura() {
        if (!estructura || estructura.length === 0) {
            return <div>Estructura no inicializada.</div>;
        }

        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Cubeta</th>
                            {Array.from({ length: registros }, (_, j) => (
                                <th key={j}>Registro {j}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {estructura.map((cubeta, i) => (
                            <tr key={i}>
                                <td>Cubeta {i}</td>
                                {cubeta.map((valor, j) => (
                                    <td key={j}>{valor !== -1 ? valor : ''}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <input
                    type="number"
                    placeholder="Ingresar valor"
                    value={valorInput}
                    onChange={(e) => setValorInput(e.target.value)}
                />
                <button onClick={handleInsert}>Insertar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        );
    }

    return (
        <div>
            {renderizarEstructura()}
        </div>
    );
}

export { Dinamicas };
