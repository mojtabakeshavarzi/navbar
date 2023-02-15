import React, { useEffect, useRef, useState } from "react";
import logo from '../src/img/2023.png';
import {FaBars , FaTwitter , FaTimes} from 'react-icons/fa';
import {links , socials} from './data';

function Navbar() {

    const [showLinks , setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks)
        {
            linksContainerRef.current.style.height = `${linkHeight}px`;
        }
        else
        {
            linksContainerRef.current.style.height = "0px";
        }
    },[showLinks])    

    return(
        <nav>
            <div className="container">
                <div className="nav-logo">
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        {
                            showLinks ? <FaTimes /> : <FaBars />
                        }
                        
                    </button>
                    <img
                    src={logo} 
                    alt="our logo"
                    width="40px"
                    />
                </div>
                <div className="nav-links" ref={linksContainerRef}>
                    <ul className="list" ref={linksRef}>
                        {
                            links.map((link) => {
                                const {id , url , text} = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className="nav-social">
                    {
                        socials.map((social) => {
                            const {id , url , icon} = social;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;