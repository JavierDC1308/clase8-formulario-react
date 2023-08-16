import React, { useState } from 'react';

function Formulario(props) {

    const [nombre, setNombre] = useState("");
    const [opcion, setOpcion] = useState("");
    const [notas, setNotas] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!nombre || !opcion || notas < 1 || notas > 10) {
            if (!nombre) {
                setErrorMessage("Por favor, ingrese un nombre.");
            } else if (!opcion) {
                setErrorMessage("Por favor, seleccione una disciplina.");
            } else {
                setErrorMessage("La nota debe estar entre 1 y 10.");
            }
            setError(true);
            return;
        } else {
            setError(false);
            props.onUpdateDisciplina(opcion, Number(notas), nombre);
            alert(`Nombre: ${nombre}, Disciplina seleccionada: ${opcion}, Nota: ${notas}`);
            
            // Restablecer el formulario
            setNombre("");
            setOpcion("");
            setNotas(0);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="container_input">
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                    placeholder="Nombre" 
                />
                <select value={opcion} onChange={e => setOpcion(e.target.value)}>
                    <option value="" disabled>
                        Selecione una disciplina
                    </option>
                    <option value="database">Base de Datos</option>
                    <option value="backend">Desarrollo Backend</option>
                    <option value="frontend">Desarrollo Frontend</option>
                    <option value="devops">Devops</option>
                </select>
                <input
                    type="number"
                    value={notas}
                    onChange={e => setNotas(e.target.value)}
                />
            </div>
            <input type="submit" value="Guardar" />
            {error && <p>{errorMessage}</p>}
        </form>
    );
}

export default Formulario;
