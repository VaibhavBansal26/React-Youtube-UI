import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import MicIcon from '@material-ui/icons/Mic';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
    const [search,setSearch] = useState("");

    return (
        <div className="header">
        
        <div className="header__left">       
            <MenuIcon/>
            <Link to="/">
           <img className="header__logo" 
           src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="icon"/>
           </Link>
        </div>

        <div className="middle">
            <div className="header__input">
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <Link to={`/search/${search}`}><SearchIcon className="header__inputButton"/></Link>
            </div>
            <div>
                <MicIcon className="header__icon"/>
            </div>
            
        </div>
        
            
        

        <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-QSZ4z8Ec2k_VtX5DWhE2-3HY9U691FcOZjpZT=s32-c-mo"
            alt="Vaibhav Bansal"/>
        </div>

        </div>
    )
}

export default Header


