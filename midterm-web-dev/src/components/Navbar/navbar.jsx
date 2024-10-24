import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BottomNavBar from '../Navbar/bottomnavbar.jsx';
import MobileSearchBar from '../Navbar/searchbar'

const Navbar = () => {
    return (
        <div>
            <div> <MobileSearchBar/> </div>
            <nav className="navbar">
            <h1>Video explorer</h1>

            <div className='nav-mid'>
                <ul>
                    <li className='mid-nav-btn'>Search any movie</li>
                    <li>
                        <SearchRoundedIcon className="search-icon" />
                    </li>
                </ul>
            </div>

            <div className='nav-right'>
            <a href = "../pages/Favorites.jsx"> Favorites </a> 
            <a href = "../pages/movie-detail"> Movie detail </a> 
            <a href = "../pages/homepage.jsx"> Home </a> 
            </div>
        </nav>
                <div><BottomNavBar /></div>
        </div>
    );
};

export default Navbar;
