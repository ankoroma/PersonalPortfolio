import './App.css'
import resume from './resume.pdf'
import { useState } from 'react';


export default function Headers() {
    // eslint-disable-next-line no-unused-vars
    const [section, setSection] = useState("Home");

    return (
        <>
            <div className='col px-5 py-2'>
                <h1 style={{textDecoration: 'underline', textDecorationColor: '#C0AFFB'}}>Alhassan Koroma</h1>
                <h3>Data Scientist | Technical Support</h3>
                <a href={resume} download={"Resume - Alhassan Koroma"}>
                <button>Print Resume</button></a>
            </div>
            <nav className="sticky-top d-flex flex-row justify-content-center justify-content-md-between align-items-center py-3 mx-0 mx-mb-5" style={{backgroundColor: '#C0B0FB', padding: '20px 70px'}}>
                <a className='navbar-brand px-1 d-none d-md-block' >
                    <div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>Home</div>
                </a>
                <a className='navbar-brand px-1 d-none d-md-block' href="#about"><div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>About</div></a>
                <a className='navbar-brand px-1' href="#education"><div onClick={() => setSection("Education")} style={{fontSize: 'larger'}}>Education</div></a>
                <a className='navbar-brand px-1' href="#skills"><div onClick={() => setSection("Skills")} style={{fontSize: 'larger'}}>Skills</div></a>
                <a className='navbar-brand px-1' href="#projects"><div onClick={() => setSection("Projects")} style={{fontSize: 'larger'}}>Projects</div></a>
                <a className='navbar-brand px-1 d-none d-md-block' href="#workexperience"><div onClick={() => setSection("Work Experience")} style={{fontSize: 'larger'}}>Work Experience</div></a>

            </nav>
        </>

    )
}