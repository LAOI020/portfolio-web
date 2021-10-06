
import React, { useEffect } from 'react';
import { ContactMe } from './components/ContactMe';
import { MyInfo } from './components/MyInfo';
import { MySkills } from './components/MySkills';
import { SectionExamples } from './components/SectionExamples';
import { showAnimations } from './helpers/showAnimations';


export const App = () => {

    useEffect(() => {
        document.querySelector('.mainContainer-app').scrollTop = 0;
        showAnimations();        
    }, []);

    return (
        <div className="mainContainer-app">
            <div 
                id="section-myInfo"
                className="sectionVertical"
            >
                <MyInfo/>
            </div>
            
            <div className="sectionVertical">
                <MySkills/>
            </div>

            <SectionExamples/>

            <div 
            id="section-contactMe"
            className="sectionVertical">
                <ContactMe/>
            </div>
        </div>
    )
};

