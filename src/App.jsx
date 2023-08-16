import React, { useState } from 'react';
import Formulario from "./components/Formulario";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [disciplinas, setDisciplinas] = useState({
        database: { count: 0, totalNotas: 0 },
        frontend: { count: 0, totalNotas: 0 },
        backend: { count: 0, totalNotas: 0 },
        devops: { count: 0, totalNotas: 0 }
    });
    
    const [estudiantes, setEstudiantes] = useState([]);

    function handleUpdateDisciplina(disciplina, nota, nombre) {
        setDisciplinas(prevState => {
            const newCount = prevState[disciplina].count + 1;
            const newTotalNotas = prevState[disciplina].totalNotas + nota;

            return {
                ...prevState,
                [disciplina]: {
                    count: newCount,
                    totalNotas: newTotalNotas
                }
            };
        });
        
        // Agregar el estudiante al estado
        setEstudiantes(prevEstudiantes => [...prevEstudiantes, { nombre, disciplina, nota }]);
    }

    return (
        <div className="container">
            <h1>Promedio de Alumnos por Materia</h1>
            <Formulario onUpdateDisciplina={handleUpdateDisciplina} />
            <div className="container">
                <table border="1" className="line_title">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Cantidad de Alunos</th>
                            <th>Calificaciones promedio de los estudiantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Base de Datos</td>
                            <td>{disciplinas.database.count}</td>
                            <td>{(disciplinas.database.totalNotas / (disciplinas.database.count || 1)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Desarrollo Frontend</td>
                            <td>{disciplinas.frontend.count}</td>
                            <td>{(disciplinas.frontend.totalNotas / (disciplinas.frontend.count || 1)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Desarrollo Backend</td>
                            <td>{disciplinas.backend.count}</td>
                            <td>{(disciplinas.backend.totalNotas / (disciplinas.backend.count || 1)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Devops</td>
                            <td>{disciplinas.devops.count}</td>
                            <td>{(disciplinas.devops.totalNotas / (disciplinas.devops.count || 1)).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="lista-estudiantes">
                    <h2>Listado de Estudiantes</h2>
                    <ul>
                        {estudiantes.map((estudiante, index) => (
                            <li key={index}>
                                Nombre: {estudiante.nombre}, Disciplina: {estudiante.disciplina}, Nota: {estudiante.nota}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
