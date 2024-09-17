
const entrenadores = [
    { nombre: 'A', reputacion: 4.5, plazas: 1 },
    { nombre: 'B', reputacion: 3.2, plazas: 4 },
    { nombre: 'C', reputacion: 1.2, plazas: 3 },
    { nombre: 'D', reputacion: 3.4, plazas: 2 }
];

const clientes = [
    { nombre: 'q', importanciaReputacion: 2.6 },
    { nombre: 'r', importanciaReputacion: 3.7 },
    { nombre: 's', importanciaReputacion: 8.5 },
    { nombre: 't', importanciaReputacion: 9.7 },
    { nombre: 'u', importanciaReputacion: 2.6 },
    { nombre: 'v', importanciaReputacion: 4.7 },
    { nombre: 'w', importanciaReputacion: 5.6 },
    { nombre: 'x', importanciaReputacion: 3.7 },
    { nombre: 'y', importanciaReputacion: 8.1 },
    { nombre: 'z', importanciaReputacion: 2.5 }
];

function calcularSatisfaccion(cliente, entrenador) {
    return cliente.importanciaReputacion * entrenador.reputacion;
}

function asignarClientes(entrenadores, clientes) {
    const asignaciones = [];
    
    clientes.sort((a, b) => b.importanciaReputacion - a.importanciaReputacion);

    for (const cliente of clientes) {
        let mejorEntrenador = null;
        let mayorSatisfaccion = 0;

        for (const entrenador of entrenadores) {
            if (entrenador.plazas > 0) {
                let satisfaccion = calcularSatisfaccion(cliente, entrenador);
                satisfaccion = parseFloat(satisfaccion.toFixed(2));
                if (satisfaccion > mayorSatisfaccion) {
                    mejorEntrenador = entrenador;
                    mayorSatisfaccion = satisfaccion;
                }
            }
        }

        if (mejorEntrenador) {
            asignaciones.push({ cliente: cliente.nombre, entrenador: mejorEntrenador.nombre, satisfaccion: mayorSatisfaccion });
            mejorEntrenador.plazas--; 
        }
    }
    console.log(asignaciones)
    return asignaciones;
}

const resultadoAsignacion = asignarClientes(entrenadores, clientes);

console.log("Asignaciones de clientes a entrenadores:");
resultadoAsignacion.forEach(asignacion => {
    console.log(`Cliente ${asignacion.cliente} -> Entrenador ${asignacion.entrenador}, Satisfacción: ${asignacion.satisfaccion.toFixed(2)}`);
});

module.exports = { calcularSatisfaccion, asignarClientes };
