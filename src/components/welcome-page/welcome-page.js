import React from 'react'

import { useNavigate } from "react-router";
import "./welcome-page.css";

export const WelcomePage = () => {

    let navigate = useNavigate();

    const redirectTo= ((page) => {

        navigate(page);
    });

return (
    <>
            <h1 className='welcomeTitle'>WelcomePage</h1>
            <button className='welcomeButton' onClick={() => redirectTo("/selling")}>
                    Mòdulo de sillas
            </button>
    </>
)
}

export default WelcomePage
