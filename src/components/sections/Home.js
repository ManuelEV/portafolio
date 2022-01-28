import React from 'react';
import intetests from './../../data/interests.js';

export const Home = () => {

    const images = intetests;

    return (
        <div className="bg-gradient-to-tr from-primary to-secondary
        w-full h-screen">
            <div className="w-full h-1/5 flex justify-center items-end z-30
            animate__animated animate__fadeInDown">
                {
                    images.map(({id, name, src}) => (
                        <img key={id} alt={name} src={src} className="h-16 w-14 lg:mx-5 mx-1 hover:animate-spin"/>
                    ))
                }
            </div>
            
            <div className="w-full h-1/5 flex justify-center items-center">
                <div className="text-center font-bold lg:text-7xl text-6xl text-primary tracking-widest hover:bg-white hover:bg-opacity-40
                bg-white bg-opacity-30 p-2 animate__animated animate__fadeInDown">
                    MANUEL ESPINOZA
                </div>
            </div>
            <div className="w-full h-3/5 flex justify-center relative">
                <div className="text-center text-white text-xl opacity-80 absolute right-2/3
                animate__animated animate__fadeInBottomLeft z-50">
                    Ingeniero Civil Informático
                </div>
                <div className="text-center text-white text-xl opacity-80 absolute left-2/3
                animate__animated animate__fadeInBottomRight z-50">
                    Desarrollador web Fullstack
                </div>
                <img src="./setup/room.png" alt="Room" 
                className="h-full select-none z-30 transform hover:scale-110 transition-all
                "/>
            </div>
            
        </div>
    )
}
