import React from 'react';
import intetests from './../../data/interests.js';

export const Home = () => {

    const images = intetests;

    return (
        <div className="bg-gradient-to-tr from-primary to-secondary
        w-full h-screen">
            <div className="w-full h-1/5 flex justify-center items-end
            animate__animated animate__fadeInDown">
                {
                    images.map(({id, name, src}) => (
                        <img key={id} alt={name} src={src} className="h-16 w-14 mx-5"/>
                    ))
                }
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
                <div className="text-center font-bold text-7xl text-primary tracking-widest
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
                className="h-full select-none absolute animate__animated animate__fadeInUp z-30"/>
            </div>
        </div>
    )
}
