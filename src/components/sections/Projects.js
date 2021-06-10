import React, {useState} from 'react';
import techs from './../../data/technologies.js';
import defaultProjects from './../../data/projects.js';

export const Projects = () => {


    const [projects, setProjects] = useState(defaultProjects);

    const onSelectTech = (e) => {
        const techName = e.target.alt;
        const projs = []
        defaultProjects.forEach((proj) => {
            for (const tech of proj.technologies) {
                if(tech === techName) {
                    projs.push(proj);
                    break;
                }
            }
        });

        setProjects( projs );
    }

    return (
        <div className="bg-primary w-full min-h-screen">
            <div className="text-4xl text-white font-bold p-12 opacity-80">
                PROYECTOS
            </div>
            <div className="text-center text-white p-2 opacity-80">
                Filtrar por tecnología
            </div>
            <div className="flex flex-row justify-center pb-2">
                {
                    techs.map(({id, name, src}) => (
                        <div className="h-16 w-16 mx-10" key={id+src}>
                            <img alt={name} src={src} className="cursor-pointer" onClick={onSelectTech}/>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 mt-4 mx-2 w-5/6">
                    {
                        projects.map(({id, name, description, previews, code, demo}) => (
                            <div className="bg-white bg-opacity-20 rounded-lg shadow-lg m-2 p-1
                            animate__animated animate__fadeIn" key={id+name}>
                                <div className="text-center font-bold text-xl text-white opacity-80">
                                    {name}
                                </div>
                                <div className="text-white opacity-80 px-5 py-8 flex justify-center">
                                    <div className="w-5/6">
                                        {description}
                                    </div>
                                </div>
                                <div className="pb-2">
                                {
                                    previews.map((preview) => (
                                        <div key={preview.src} className="px-5 flex justify-center">
                                            <img alt="" src={preview.src} />
                                        </div>
                                    ))
                                }
                                </div>
                                <div className="flex justify-center">
                                    <div className="my-2 mx-2">
                                        <a href={code} target="_blank" rel="noopener noreferrer">
                                            <img alt="" src="./technologies/github.svg" className="h-10 w-10"/>
                                        </a>
                                    </div>
                                    {
                                        (demo) &&
                                        (
                                            <div className="my-2 mx-2">
                                                <a href={demo} target="_blank" rel="noopener noreferrer">
                                                    <img alt="" src="./demo.svg" className="h-10 w-10"/>
                                                </a>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}