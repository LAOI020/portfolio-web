
import React, { useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { textsExamples } from '../data';
import { Examples } from './Examples';


export const SectionExamples = () => {

    const [exampleNumber, setExampleNumber] = 
        useState(0);

    const clickArrow = (right) => {
        console.log('clikkk');
        let elementID;

        if(right){
            setExampleNumber((value) => value + 1);

            elementID = `exampleContainer${exampleNumber + 1}`;
        } else {
            setExampleNumber((value) => value - 1);

            elementID = `exampleContainer${exampleNumber - 1}`;
        }

        const nextElement = document.getElementById(elementID);

        nextElement.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="sectionVertical">
            <div className="sectionHorizontal">
                {textsExamples.map((project, index) => (
                    <div
                        key={project.videoUrl}
                        id={`exampleContainer${index}`}
                        className="childHorizontal"
                    >
                        <Examples
                            projectInfo={project}
                        />

                        <ArrowsContaienr
                            index={index}
                            clickArrow={clickArrow}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


const ArrowsContaienr = ({index, clickArrow}) => {
    return (
        <div 
            className="arrows-container opacityText"
            style={{animationDelay: '4.5s'}}
        >
            {index !== 0 ?
                <BiLeftArrow
                    className="arrowsExample leftArrow"
                    onClick={() => clickArrow(false)}
                />
                :
                null
            }

            {index !== 5 ?
                <BiRightArrow
                    className="arrowsExample rightArrow"
                    onClick={() => clickArrow(true)}
                />
                :
                null
            }
        </div>
    )
}
