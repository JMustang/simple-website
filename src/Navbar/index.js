import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className={`${isOpen ? 'show' : ''}collapse navbar-collapse`} id="navbar01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={handleToggle}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/task-list" className="nav-link" onClick={handleToggle}>Task List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/task-form" className="nav-link" onClick={handleToggle}>Task Form</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}