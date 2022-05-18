import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// style the resume for the web but include the pdf to download;
import '../assets/css/reset.css'
import '../assets/css/style.css'

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {

        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <Home />;
        }
    };


    // the key needs to be set as .item since i'm using the .map() method in NavLinks
    const handlePageChange = (page) => setCurrentPage(page.item);

    // include the hero image as well as anything that exists above the navbar
    return (
        <div className='full-page'>
            <div className='hero'>
                <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            {/* renders the selected page from the nav bar */}
            <p>testing testing</p>
            {renderPage()}
        </div>
    )

}