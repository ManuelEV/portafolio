import React from 'react';
import intetests from './../../data/interests.js';

export const Home = () => {

    const images = intetests;

    return (
        <div className="bg-gradient-to-tr from-primary to-secondary
        w-full h-screen">
            <div className="w-full h-1/5 flex justify-center items-end">
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
                animate__animated animate__fadeInBottomLeft">
                    Ingeniero Civil Informático
                </div>
                <div className="text-center text-white text-xl opacity-80 absolute left-2/3
                animate__animated animate__fadeInBottomRight">
                    Desarrollador web Fullstack
                </div>
                <img src="./setup/room.png" alt="Room" 
                className="h-full absolute animate__animated animate__fadeIn"/>
            </div>
        </div>
    )
}
