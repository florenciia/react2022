export const serviciosGeneral = [
    {   id:1,
        titulo:'Bursatil',
        precio:'$25',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tipo: 'asesoramiento',
    },

    
    {   id:2,
        titulo:'Administración de ahorros',
        precio:'$25',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tipo: 'asesoramiento',
    },
    {   id:3,
        titulo:'Armado de carteras de inversión',
        precio:'$25',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tipo: 'asesoramiento',
    },
    {
        id: 4,
        titulo: 'Inversión en acciones',
        precio: '$35',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'curso',
    },
    {
        id: 5,
        titulo: 'Inversión indexada',
        precio: '$35',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'curso',
    },
    {
        id: 6,titulo: 'Cobertura cambiaria con futuros de dolar',
        precio: '$35',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'curso',
    },
    {
        id: 7,
        titulo: 'Trading intradiario en la bolsa de Nueva York',
        precio: '$35',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'curso',
    },
    {
        id: 8,
        titulo: 'Analisis de mercado de divisas internacional',
        precio: '$40',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'producto',
    },
    {
        id: 9,
        titulo: 'Análisis y proyecciones del tipo de cambio a través del mercado de futuros Matba-Rofex.',
        precio: '$40',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'producto',
    },
    {
        id: 10,
        titulo: 'Análisis macroeconómico y su impacto en el mercado de acciones de empresas.',
        precio: '$40',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'producto',
    },
    {
        id: 11,
        titulo: 'Protecciones del mercado de materias primas agrícolas.',
        precio: '$40',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'producto',
    },
];


export const traerServicios = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(serviciosGeneral);
    }, 2000);
});

// export const traerServicios2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(serviciosGeneral.id);
//     }, 2000);
// });
