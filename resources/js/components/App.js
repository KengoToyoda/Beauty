import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Top from './Main/Top';
import Home from './Mypage/Home'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import MenuTop from './Mypage/Menu/Index'
import CatalogTop from './Mypage/Catalog/Index'
import ProfileTop from './Mypage/Profile/Index'

function App() {
    
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        axios
            .get('/react/user')
            .then(response => {
                setUser(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);
    
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="home" element={<Home />} />
                        <Route path="home/menu" element={<MenuTop />} />
                        <Route path="home/catalog" element={<CatalogTop />} />
                        <Route path="home/profile" element={<ProfileTop />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'));
}
