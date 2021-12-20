import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

function Header(props) {
    
  return (
    <header>
        <ul className="heaer_nav circleBehind">
            <Link to="/" >
                <li className="nav_item">Topページ</li>
            </Link>
            <Link to="/home">
                <li className="nav_item">美容師の方はこちら</li>
            </Link>
        </ul>
    </header>
  );
};

export default Header;