
import React from 'react';
import ReactPlayer from 'react-player';


export const Examples = ({projectInfo}) => {

    const {videoUrl, text1, text2, text3} = projectInfo;

    return (
        <div className="example-container opacityContainer">
            <div 
                className="videoExample expandeWidth-left"
                style={{animationDuration: '1s'}}
            >
                <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    height="100%"
                    width="100%"
                />
            </div>

            <span 
                style={{color: 'green'}}
            >
                <span 
                    className="opacityText"
                    style={{animationDelay: '1.8s'}}
                >
                    {text1}
                </span>
                <br/>
                <br/>
                <span 
                    className="opacityText"
                    style={{animationDelay: '2.8s'}}
                >
                    {text2}
                </span>
                <br/>
                <br/>
                <span 
                    className="opacityText"
                    style={{animationDelay: '3.8s'}}
                >
                    {text3}
                </span>
            </span>
        </div>
    )
};
