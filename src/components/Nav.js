import './Nav.css';
import React, { useEffect, useRef } from 'react';

export default function Nav() {
    const onScroll = e => {
        console.log(e)
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    })

    return (
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
};