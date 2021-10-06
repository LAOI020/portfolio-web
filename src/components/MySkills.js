
import React from 'react';
import { skillsInfo } from '../data';


export const MySkills = () => {
    return (
        <div 
            id="mySkills-container"
            className="mySkills-container expand"
        >
            <h1 
                className="skillsTitle-animation opacityAnimation"
                title="Habilidades" 
            >
                Habilidades
            </h1>

            <div className="skills-container-grid">
                {skillsInfo.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="skill-container"
                        name={skill.name}
                        style={{animationDelay: `${index * 0.3}s`}}
                    >
                        <img 
                            src={skill.image} 
                            alt="" 
                            height="100%" 
                            width="100%"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
