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
import MenuCreate from './Mypage/Menu/Create/Create'
import MenuIndex from './Mypage/Menu/Index/Index'
import CatalogIndex from './Mypage/Catalog/Index/Index'
import CatalogCreate from './Mypage/Catalog/Create/Create'
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
                        <Route path="home/menu" element={<MenuIndex />} />
                        <Route path="home/menu/create" element={<MenuCreate />} />
                        <Route path="home/catalog" element={<CatalogIndex />} />
                        <Route path="home/catalog/create" element={<CatalogCreate />} />
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
