import React from 'react';
import Popup from 'reactjs-popup';
import experiencies from '../../data/experience';

import '../../style/timeline.css';
import 'reactjs-popup/dist/index.css';

export const AboutMe = () => {


    return (
        <div className="bg-primary w-full min-h-screen text-white">
            <div className="text-4xl text-white font-bold p-12 opacity-80">
                SOBRE MÍ
            </div>
            <div className="text-lg font-normal px-12 mb-5 opacity-90">
                Ingeniero Civil Informático titulado en Universidad de la Frontera en Temuco, IX Región. 
                Mi perfil actualmente es de Ingeniero de Software y me interesa el desarrollo web Fullstack 
                con Java/JavaScript y sus respectivos frameworks
            </div>
            <div className="animate__animated animate__fadeInDown pt-5 pb-2">
                <div className="w-full flex justify-center items-center">
                    <a href="https://github.com/ManuelEV/" className="cursor-pointer transform hover:scale-110 transition-all" 
                        target="_blank" rel="noopener noreferrer">
                        <img className="h-8 mx-5" src="./socials/github.svg" alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/manuelespv/" className="cursor-pointer transform hover:scale-110 transition-all" 
                        target="_blank" rel="noopener noreferrer">
                        <img className="h-8 mx-5" src="./socials/linkedin.svg" alt="Linkedin"/>
                    </a>
                </div>
            </div>
            <div className="timeline">
                {
                experiencies.map(({id, title, workplace, description, technologies, dateRange, workplaceIcon}) => (
                    <div 
                        className={`container ${id % 2 === 0 ? 'right animate__fadeInRight' : 'left animate__fadeInLeft'} 
                        animate__animated`} key={ id }
                    >
                        <div className="content hover:shadow-2xl hover:bg-white hover:bg-opacity-80" >
                            <h2 className="text-primary underline text-3xl font-bold">{ title }</h2>
                            <h3 className="text-primary opacity-90 text-2xl">
                                { workplace } | <span className="opacity-80 text-xl">📅 { dateRange }</span>
                            </h3>
                            <hr></hr>
                            <p className="pt-5 text-primary opacity-90 text-lg">
                                { description }
                            </p>

                            <div className="w-full flex justify-center">
                                <img className="h-16" src={ workplaceIcon } alt="Workplace"></img>
                            </div>
                            
                            <div className="w-full text-center text-primary underline cursor-pointer">
                                
                                <Popup
                                    trigger={<button className="underline hover:text-secondary">Tecnologías utilizadas 🛠</button>} 
                                    position={'top center'} arrow={'top center'}
                                >
                                    <div className="bg-white text-primary font-semibold px-8">
                                        <ul className="list-disc">
                                            {
                                                technologies.map(( tool ) => (
                                                    <li className="opacity-80" key={`${tool}-${id}`}>
                                                        { tool }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </Popup>
                            </div>
                            
                            
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
