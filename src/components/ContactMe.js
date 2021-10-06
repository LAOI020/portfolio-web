
import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { sendMessage } from '../helpers/sendMessage';


export const ContactMe = () => {

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const clickBtnSend = () => {
        if(!inputName || !inputEmail || !inputMessage){
            return Swal.fire({
                title: 'Oops...',
                text: 'ningun campo puede estar vacio',
                background: 'black',
                confirmButtonColor: 'green'
            })
        }

        sendMessage({
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        });

        return Swal.fire({
            title: 'LISTO',
            text: 'te respondere lo mas pronto posible',
            background: 'black',
            confirmButtonColor: 'green',
        });
    };

    const clickIconGitHub = () => {
        window.open('https://github.com/LAOI020', '_blank');
    };

    return (
        <div 
            id="contactMe-container"
            className="contactMe-container"
        >
            <span className="animateBorder topBorder"></span>
            <span className="animateBorder rightBorder"></span>
            <span className="animateBorder bottomBorder"></span>
            <span className="animateBorder leftBorder"></span>
            
            <h1
                className="opacityTextSimple"
                style={{animationDelay: '3.5s'}}
            >
                Contactame
            </h1>

            <h3
                className="opacityTextSimple"
                style={{animationDelay: '4.2s'}}
            >
                Nombre
            </h3>

            <input
                className="expandeWidth-left"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                style={{animationDuration: '0.7s', animationDelay: '5.7s'}}
            />

            <h3
                className="opacityTextSimple"
                style={{animationDelay: '4.9s'}}
            >
                Email / celular
            </h3>

            <input
                className="expandeWidth-left"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                style={{animationDuration: '0.7s', animationDelay: '6.4s'}}
            />
            
            <h3
                className="opacityTextSimple"
                style={{animationDelay: '5.6s'}}
            >
                Mensaje
            </h3>

            <textarea
                className="expandeWidth-left"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                style={{animationDuration: '0.7s', animationDelay: '7.1s'}}
            />

            <button 
                className="btnSend scale-btn expandeWidth-left"
                style={{animationDuration: '0.7s', animationDelay: '7.8s'}}
                onClick={clickBtnSend}
            >
                Enviar
            </button>

            <AiFillGithub 
                onClick={clickIconGitHub}
                style={{
                    cursor: 'pointer',
                    height: '50px',
                    width: '50px',
                    marginTop: '10px'
                }}
            />
        </div>
    )
}
