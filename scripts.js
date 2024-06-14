const consultarPorAlumno = async () => {
    const nombreAlumno = document.getElementById('nombreAlumno').value;
    const response = await fetch(`http://localhost:3000/notas/alumno/${nombreAlumno}`);
    const resultados = await response.json();

    let resultadoHTML = `<h3>Resultados para ${nombreAlumno}</h3><ul>`;
    resultados.forEach(resultado => {
        resultadoHTML += `<li>${resultado.materia}: ${resultado.nota}</li>`;
    });
    resultadoHTML += '</ul>';
    document.getElementById('resultadoAlumno').innerHTML = resultadoHTML;
}

const consultarPorMateria = async () => {
    const nombreMateria = document.getElementById('nombreMateria').value;
    const response = await fetch(`http://localhost:3000/notas/materia/${nombreMateria}`);
    const resultados = await response.json();

    let resultadoHTML = `<h3>Resultados para ${nombreMateria}</h3><ul>`;
    resultados.forEach(resultado => {
        resultadoHTML += `<li>${resultado.nombre}: ${resultado.nota}</li>`;
    });
    resultadoHTML += '</ul>';
    document.getElementById('resultadoMateria').innerHTML = resultadoHTML;
}

const agregarAlumno = async () => {
    const nombre = document.getElementById('nombreAlumno').value
    const dni = document.getElementById('dniAlumno').value
    const mail = document.getElementById('emailAlumno').value
    const response = await fetch('http://localhost:3000/alumnos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, dni, mail })
    });

    const resultado = await response.json()
    document.getElementById('resultadoAgregarAlumno').innerHTML = `<p>${resultado.message}</p>`
}

const agregarMateria = async () => {
    const materia = document.getElementById('nombreMateria').value
    const anio = document.getElementById('anioMateria').value
    const response = await fetch('http://localhost:3000/materias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ materia, anio })
    });

    const resultado = await response.json()
    document.getElementById('resultadoAgregarMateria').innerHTML = `<p>${resultado.message}</p>`
}
