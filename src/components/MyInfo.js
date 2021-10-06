
import React, { useEffect } from 'react';
import { rotateObject } from '../helpers/rotateObject';
import foto from '../styles/foto.jpg';
import TagCloud from 'TagCloud';

export const MyInfo = () => {

    useEffect(() => {

        const myTags = [
            'FullStack MERN',
            'desarrollo movil',
            '52 3741078455', 
            'autodidacta', 
            'empatia con clientes',
            'aprendizaje rapido', 
            'siempre aprendiendo', 
            'iniciativa', 
            'habilidades blandas', 
            'trabajo en equipo',
            'gusto por resolver problemas', 
        ];
        
        TagCloud('.tagCloud-container', myTags, {
            radius: 240,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true
        }); 
       
        setTimeout(() => {
            let containerRotate = 
                document.getElementById('myInfo-container');
            
            containerRotate.classList.remove('expandeWidth-left');
    
            let sectionMyInfo = 
                document.getElementById('section-myInfo');
    
            sectionMyInfo.addEventListener(
                'mousemove', (e) =>  rotateObject(e, containerRotate)
            );    
        }, 4000);

    }, []);

    

    return (
        <div className="myInfo-grid-container">
            <div 
                id="myInfo-container"
                className="myInfo-container expandeWidth-left"
            >
                <img
                    src={foto}
                    alt=""
                    className="expandeWidth-right"
                />

                <h1 className="textTyping-name effectTyping">
                    Angel Orozco
                </h1>

                <div>
                    <h2 className="textTyping-info effectTyping">
                        Me encanta crear 
                        {window.innerWidth < 1024 ? <br/> : null} 
                        software que
                    </h2>

                    <h2 className="textTyping-info2 effectTyping">
                        simplifica la vida 
                        {window.innerWidth < 1024 ? <br/> : null} 
                        de las personas
                    </h2>

                    <h2 className="textTyping-info3 effectTyping">
                        Y aprender 
                        {window.innerWidth < 1024 ? <br/> : null} 
                        tecnologias nuevas
                    </h2>
                </div>
            </div>


            {window.innerWidth >= 1024 ?
                <div 
                    className="tagCloud-container opacityContainer"
                    style={{animationDelay: '16.8s'}}
                ></div>
                :
                null
            }
        </div>
    )
}
