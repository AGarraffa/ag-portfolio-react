import React from 'react';

// destructuring of the props
function NavLinks({ currentPage, handlePageChange }) {


    // making an array for the navbar
    let navLinks = ['Home', 'About', 'Projects', 'Contact', 'Resume']

    console.log(`Current Page: ${currentPage}`)
    
    return (
        <nav className='fixed-nav'>
            <ul className="navtop">
                {/* navbar is dynamically rendered based on the navLinks array. This will make adding or removing them easier in the long run */}
                {navLinks.map((item, index)=>
                <li class-name="nav-item" key={index}>
                    <a href={'"#' + item + '"'}
                    onClick = {() => handlePageChange({item})}
                    className={currentPage === {item} ? 'active-nav' : 'nav-link'}
                >{item}</a>
                </li>)}
            </ul>
        </nav>
    )
}

export default NavLinks;