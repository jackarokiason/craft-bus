import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import{Link}from "react-router-dom";
import { useStateValue } from './StateProvider';



function header() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="header">
            <Link className="linklogo" to="/">
            <p className="name">Craft-Bus</p></Link>
        <div className="header_search">
            <input className="header_searchInput"
            type="text" />
        <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
            <Link className="link" to='/login'>
            <div className="header_option">
                <span className="header_optionLineOne">Hello Guest</span>
                <span className="header_optionLinetwo">Signin</span>
            </div>
            </Link>
            <div className="header_option">
                
            <span className="header_optionLineOne">Return</span>
                <span className="header_optionLinetwo">& Orders</span>
                </div>
                <div className="header_option">
                
                <span className="header_optionLineOne">Try</span>
                <span className="header_optionLinetwo">Premium</span>
                </div>
                <Link className="link" to="/checkout">
                <div className="header_optionbask">
                    <ShoppingBasket />
    <span className="header_optionLinetwo header_basketCount" >{basket?.length}</span>
                </div>
                </Link>
        
        </div>
        </div>
    )
}

export default header

//homejavascript