
const projects = [
    {
        id: 7,
        name: 'Reactibook',
        description: 'Aplicación web que simula el muro de facebook, la cual está construida con React + Redux + TailwindCSS en el frontend y Node + Express + Mongoose + MongoDB (Atlas) en el backend. La autenticación se maneja mediante Firebase y la gestión de las imágenes con Cloudinary',
        previews: [
            {
                id: 1,
                src: './projects/reactibook-1.png'
            },
            {
                id: 2,
                src: './projects/reactibook-2.gif'
            },
            {
                id: 3,
                src: './projects/reactibook-3.gif'
            },
        ],
        technologies: [
            'React',
            'Node.js',
        ],
        code: 'https://github.com/ManuelEV/reactibook',
        demo: 'https://reactibook-backend-node.herokuapp.com',
    },
    {
        id: 8,
        name: 'Schedule App',
        description: 'Aplicación web para gestionar agendas de contactos, construida con Spring Boot, Vue.js y MySQL',
        previews: [
            {
                id: 1,
                src: './projects/schedule-app-1.png'
            },
            {
                id: 2,
                src: './projects/schedule-app-2.gif'
            },
        ],
        technologies: [
            'Spring Boot',
            'Vue.js',
        ],
        code: 'https://github.com/ManuelEV/schedule-app',
    },
    {
        id: 1,
        name: 'Mapu Rayén',
        description: 'Aplicación web creada para un emprendimiento de artículos de artesanía, que permite gestionar los productos y la venta de estos. La aplicación web está hecha en Vue.js y Laravel',
        previews: [
            {
                id: 1,
                src: './projects/mapu-rayen-preview1.gif'
            },
            {
                id: 2,
                src: './projects/mapu-rayen-preview2.gif'
            },
        ],
        technologies: [
            'Vue.js',
            'Laravel',
        ],
        code: 'https://github.com/ManuelEV/mapu-rayen',
    },
    {
        id: 2,
        name: 'Fiware API connection',
        description: 'Aplicación web para visualizar los datos de la instancia de Fiware de Smart Araucanía',
        previews: [
            {
                id: 1,
                src: './projects/angular-fiware.gif'
            },
        ],
        technologies: [
            'Angular',
        ],
        code: 'https://github.com/smartaraucania/Conexion-Fiware-Angular',
    },
    {
        id: 3,
        name: 'Spring Boot E-Commerce',
        description: 'Aplicación web creada como MVP de tienda virtual utilizando Spring Boot y Thymeleaf',
        previews: [
            {
                id: 1,
                src: './projects/eshop-admin.gif'
            },
            {
                id: 1,
                src: './projects/eshop-customer.gif'
            },
        ],
        technologies: [
            'Spring Boot',
        ],
        code: 'https://github.com/ManuelEV/mapu-rayen',
    },
    {
        id: 4,
        name: 'iRecycler',
        description: 'iRecycler es una aplicación web creada en Vue.js y Express, que permite la gestión de puntos de reciclaje por medio de un mapa interactivo. Se hizo para una hackathon organizada por Smart Araucanía, obteniendo junto a unos amigos, el primer lugar de dicho concurso',
        previews: [
            {
                id: 1,
                src: './projects/iRecycler-preview.gif'
            },
        ],
        technologies: [
            'Vue.js',
            'Node.js',
        ],
        code: 'https://github.com/ManuelEV/iRecycler',
    },
    {
        id: 5,
        name: 'Amazing Calculator',
        description: 'Una pequeña calculadora hecha en React para una prueba técnica, que me sirvió para experimentar con hooks :)',
        previews: [
            {
                id: 1,
                src: './projects/react-calculator.gif'
            },
        ],
        technologies: [
            'React',
        ],
        code: 'https://github.com/ManuelEV/23people-JS-Entry',
    },
    {
        id: 6,
        name: 'iRecycler Mobile',
        description: 'Aplicación móvil que busca visualizar distintos puntos de reciclaje a lo largo de la ciudad de Temuco, además de permitir añadir nuevos, actualizar o eliminar los que ya se tienen registrados junto con poder monitorear su capacidad de almacenaje. El proyecto está hecho con Flutter, Firebase y la API de Google Maps',
        previews: [
            {
                id: 1,
                src: './projects/iRecycler-mobile.gif'
            },
        ],
        technologies: [
            'Experiment',
        ],
        code: 'https://github.com/ManuelEV/iRecycler-Mobile',
    },
];

export default projects;