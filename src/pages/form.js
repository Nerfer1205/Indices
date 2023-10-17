import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { IndexContext } from '../IndexContext';


const FormIndices = () => {
    const {
        numRegistros,
        setNumRegistros,
        longitudRegistros,
        setLongitudRegistro,
        tamBloque,
        setTamBloque,
        tipoIndice,
        setTipoIndice,
        longitudIndice,
        setLongitudIndice,
        setOpenModal,
        setFormValido,
        setFormError,
        addStep
    } = React.useContext(IndexContext);

    const onSubmit = (event) => {
        event.preventDefault();
        if (numRegistros === 0) {
            setFormError("Debe indicar la cantidad de registros");
            setFormValido(false);
        }
        else if (longitudRegistros === 0) {
            setFormError("Debe indicar la longitud de cada registro");
            setFormValido(false);
        }
        else if (tamBloque === 0) {
            setFormError("Debe indicar el tamaño del bloque");
            setFormValido(false);
        }
        else if (tipoIndice === 0) {
            setFormError("Debe indicar el tipo de indice");
            setFormValido(false);
        }
        else if (longitudIndice === 0) {
            setFormError("Debe indicar la longitud de cada indice");
            setFormValido(false);
        }
        else {
            setFormError("Perfecto, ve a la pestaña 'Ver indices' para ver el paso a paso");
            setFormValido(true);
        }
        console.log(
            {
                numRegistros,
                longitudRegistros,
                tamBloque,
                tipoIndice,
                longitudIndice
            }
        );
        setOpenModal(true);
        addStep();
    };

    const onChange = (event) => {
        if (event.target.id === "floatingInputRegistros") {
            setNumRegistros(event.target.value);
        }
        if (event.target.id === "floatingInputLongitud") {
            setLongitudRegistro(event.target.value);
        }
        if (event.target.id === "floatingInputLongitudIndice") {
            setLongitudIndice(event.target.value);
        }
        if (event.target.id === "floatingInputTamanio") {
            setTamBloque(event.target.value);
        }
        if (event.target.id === "floatingSelect") {
            setTipoIndice(event.target.value);
        }
    };



    return (
        <form onChange={onChange} onSubmit={onSubmit}>
            <FloatingLabel controlId="floatingSelect" label="Seleccione el tipo de indice">
                <Form.Select>
                    <option>Seleccione una opción</option>
                    <option value="1">Primario</option>
                    <option value="2">Secundario</option>
                    <option value="3">Multinivel sobre indices primarios</option>
                    <option value="4">Multinivel sobre indices secundarios</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputRegistros"
                label="Escriba la cantidad de registros"
                className="mb-3"
            >
                <Form.Control type="number" placeholder="250000" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputLongitud"
                label="Escriba la longitud de cada registro en bytes"
                className="mb-3"
            >
                <Form.Control type="number" placeholder="150" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputLongitudIndice"
                label="Escriba la longitud de cada indice en bytes"
                className="mb-3"
            >
                <Form.Control type="number" placeholder="150" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInputTamanio"
                label="Escriba el tamaño del bloque en bytes"
                className="mb-3"
            >
                <Form.Control type="number" placeholder="8192" />
            </FloatingLabel>
            <Button type='submit' variant="outline-primary">Enviar</Button>
        </form>


    );
};

export { FormIndices };
