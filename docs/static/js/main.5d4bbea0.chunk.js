(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var i=t(1),c=t.n(i),s=t(4),r=t.n(s),n=(t(11),[{id:1,name:"Gaming",src:"./interests/gamepad.svg"},{id:2,name:"Photoshop",src:"./interests/photoshop.svg"},{id:3,name:"Basketball",src:"./interests/basketball-ball.svg"},{id:4,name:"Painting",src:"./interests/brush.svg"},{id:5,name:"Music",src:"./interests/headphones.svg"}]),o=t(0),l=function(){var e=n;return Object(o.jsxs)("div",{className:"bg-gradient-to-tr from-primary to-secondary\r w-full h-screen",children:[Object(o.jsx)("div",{className:"w-full h-1/5 flex justify-center items-end",children:e.map((function(e){var a=e.id,t=e.name,i=e.src;return Object(o.jsx)("img",{alt:t,src:i,className:"h-16 w-14 mx-5"},a)}))}),Object(o.jsx)("div",{className:"w-full h-1/5 flex justify-center items-center",children:Object(o.jsx)("div",{className:"text-center font-bold text-7xl text-primary tracking-widest\r bg-white bg-opacity-30 p-2 animate__animated animate__fadeInDown",children:"MANUEL ESPINOZA"})}),Object(o.jsxs)("div",{className:"w-full h-3/5 flex justify-center relative",children:[Object(o.jsx)("div",{className:"text-center text-white text-xl opacity-80 absolute right-2/3\r animate__animated animate__fadeInBottomLeft",children:"Ingeniero Civil Inform\xe1tico"}),Object(o.jsx)("div",{className:"text-center text-white text-xl opacity-80 absolute left-2/3\r animate__animated animate__fadeInBottomRight",children:"Desarrollador web Fullstack"}),Object(o.jsx)("img",{src:"./setup/room.png",alt:"Room",className:"h-full absolute animate__animated animate__fadeIn"})]})]})},d=t(5),m=t(6),p=[{id:1,name:"Vue.js",src:"./technologies/vue-js.svg"},{id:2,name:"Spring Boot",src:"./technologies/spring-boot.svg"},{id:3,name:"Angular",src:"./technologies/angular.svg"},{id:4,name:"Node.js",src:"./technologies/node-js.svg"},{id:5,name:"Laravel",src:"./technologies/laravel.svg"},{id:6,name:"React",src:"./technologies/react.svg"},{id:6,name:"Experiment",src:"./technologies/experiment.svg"}],u=[{id:1,name:"Mapu Ray\xe9n",description:"Aplicaci\xf3n web creada para un emprendimiento de art\xedculos de artesan\xeda, que permite gestionar los productos y la venta de estos. La aplicaci\xf3n web est\xe1 hecha en Vue.js y Laravel",previews:[{id:1,src:"./projects/mapu-rayen-preview1.gif"},{id:1,src:"./projects/mapu-rayen-preview2.gif"}],technologies:["Vue.js","Laravel"],code:"https://github.com/ManuelEV/mapu-rayen"},{id:2,name:"Fiware API connection",description:"Aplicaci\xf3n web para visualizar los datos de la instancia de Fiware de Smart Araucan\xeda",previews:[{id:1,src:"./projects/angular-fiware.gif"}],technologies:["Angular"],code:"https://github.com/smartaraucania/Conexion-Fiware-Angular"},{id:3,name:"Spring Boot E-Commerce",description:"Aplicaci\xf3n web creada como MVP de tienda virtual utilizando Spring Boot y Thymeleaf",previews:[{id:1,src:"./projects/eshop-admin.gif"},{id:1,src:"./projects/eshop-customer.gif"}],technologies:["Spring Boot"],code:"https://github.com/ManuelEV/mapu-rayen"},{id:4,name:"iRecycler",description:"iRecycler es una aplicaci\xf3n web creada en Vue.js y Express, que permite la gesti\xf3n de puntos de reciclaje por medio de un mapa interactivo. Se hizo para una hackathon organizada por Smart Araucan\xeda, obteniendo junto a unos amigos, el primer lugar de dicho concurso",previews:[{id:1,src:"./projects/iRecycler-preview.gif"}],technologies:["Vue.js","Node.js"],code:"https://github.com/ManuelEV/iRecycler"},{id:5,name:"Amazing Calculator",description:"Una peque\xf1a calculadora hecha en React para una prueba t\xe9cnica, que me sirvi\xf3 para experimentar con hooks :)",previews:[{id:1,src:"./projects/react-calculator.gif"}],technologies:["React"],code:"https://github.com/ManuelEV/23people-JS-Entry"},{id:6,name:"iRecycler Mobile",description:"Aplicaci\xf3n m\xf3vil que busca visualizar distintos puntos de reciclaje a lo largo de la ciudad de Temuco, adem\xe1s de permitir a\xf1adir nuevos, actualizar o eliminar los que ya se tienen registrados junto con poder monitorear su capacidad de almacenaje. El proyecto est\xe1 hecho con Flutter, Firebase y la API de Google Maps",previews:[{id:1,src:"./projects/iRecycler-mobile.gif"}],technologies:["Experiment"],code:"https://github.com/ManuelEV/iRecycler-Mobile"}],h=function(){var e=Object(i.useState)(u),a=Object(m.a)(e,2),t=a[0],c=a[1],s=function(e){var a=e.target.alt,t=[];u.forEach((function(e){var i,c=Object(d.a)(e.technologies);try{for(c.s();!(i=c.n()).done;){if(i.value===a){t.push(e);break}}}catch(s){c.e(s)}finally{c.f()}})),c(t)};return Object(o.jsxs)("div",{className:"bg-primary w-full min-h-screen",children:[Object(o.jsx)("div",{className:"text-4xl text-white font-bold p-12 opacity-80",children:"PROYECTOS"}),Object(o.jsx)("div",{className:"text-center text-white p-2 opacity-80",children:"Filtrar por tecnolog\xeda"}),Object(o.jsx)("div",{className:"flex flex-row justify-center pb-2",children:p.map((function(e){var a=e.id,t=e.name,i=e.src;return Object(o.jsx)("div",{className:"h-16 w-16 mx-10",children:Object(o.jsx)("img",{alt:t,src:i,className:"cursor-pointer",onClick:s})},a)}))}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("div",{className:"grid grid-cols-1 mt-4 mx-2 w-5/6",children:t.map((function(e){var a=e.id,t=e.name,i=e.description,c=e.previews,s=e.code;return Object(o.jsxs)("div",{className:"bg-white bg-opacity-20 rounded-lg shadow-lg m-2 p-1\r animate__animated animate__fadeIn",children:[Object(o.jsx)("div",{className:"text-center font-bold text-xl text-white opacity-80",children:t}),Object(o.jsx)("div",{className:"text-white opacity-80 px-5 py-8 flex justify-center",children:Object(o.jsx)("div",{className:"w-5/6",children:i})}),Object(o.jsx)("div",{className:"pb-2",children:c.map((function(e){return Object(o.jsx)("div",{className:"px-5 flex justify-center",children:Object(o.jsx)("img",{alt:"",src:e.src})},e.src)}))}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("div",{className:"my-2",children:Object(o.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("img",{alt:"",src:"./technologies/github.svg",className:"h-10 w-10"})})})})]},a)}))})})]})};var j=function(){return Object(o.jsxs)("div",{className:"w-full h-full",children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(a){var t=a.getCLS,i=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.5d4bbea0.chunk.js.map