
const { calcularSatisfaccion, asignarClientes } = require('./resolution');

describe('Tests para la asignación de clientes a entrenadores', () => {
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

    test('calcularSatisfaccion debe calcular correctamente la satisfacción', () => {
        const cliente = { nombre: 'q', importanciaReputacion: 2.6 };
        const entrenador = { nombre: 'A', reputacion: 4.5 };
        expect(calcularSatisfaccion(cliente, entrenador)).toBeCloseTo(11.7, 1);
    });

    test('asignarClientes debe asignar clientes a entrenadores correctamente', () => {
        const resultado = asignarClientes(entrenadores, clientes);
        const esperado = [
            { cliente: 't', entrenador: 'A', satisfaccion: 43.65 },
            { cliente: 's', entrenador: 'D', satisfaccion: 28.9 },
            { cliente: 'y', entrenador: 'D', satisfaccion: 27.54 },
            { cliente: 'w', entrenador: 'B', satisfaccion: 17.92 },
            { cliente: 'v', entrenador: 'B', satisfaccion: 15.04 },
            { cliente: 'r', entrenador: 'B', satisfaccion: 11.84 },
            { cliente: 'x', entrenador: 'B', satisfaccion: 11.84 },
            { cliente: 'q', entrenador: 'C', satisfaccion: 3.12 },
            { cliente: 'u', entrenador: 'C', satisfaccion: 3.12 },
            { cliente: 'z', entrenador: 'C', satisfaccion: 3 }
        ];

        expect(resultado).toEqual(esperado);
    });
});
