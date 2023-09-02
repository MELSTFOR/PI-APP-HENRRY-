import React from "react";
import SearchBar from "../SearchBar";
import {Link} from "react-router-dom";
import style from "./Nav.module.css"





export default function Nav ({onSearch}){
    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <Link to='/home' className={style.link}>Home</Link>
            
            <Link to='/about' className={style.link}>About</Link>

            </nav>
    )
};