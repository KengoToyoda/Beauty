import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Header(props) {
    let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
    const [csrf, setCsrf] = useState(csrf_token);
    
    
    const onSubmit = () => {
        axios.post('/logout')
        .then(response => {
            alert('成功')
        })
        .catch(error => {
            console.log(error);
        })
    };
    
  return (
    <header>
        <ul className="heaer_nav circleBehind">
            <Link to="/" >
                <li className="nav_item">Topページ</li>
            </Link>
            <Link to="/home">
                <li className="nav_item">美容師の方はこちら</li>
            </Link>
            <form onClick={onSubmit}>
                <input type="hidden" name="_token" value={ csrf } />
                <button type="submit">ログアウト</button>
            </form>
        </ul>
    </header>
  );
};

export default Header;