import React ,{ useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import { ImageForm } from './ImageForm';
import { MainForm } from './MainForm';


function Index() {
    const [stylist, setStylist] = useState(['']);
    
    
    return (
        <div className="container">
            <ImageForm 
                userName={stylist.name}
                userImage={stylist.image}
                stylistId={stylist.id}
                onSetStylist={setStylist}
            />
            <MainForm 
                onSetStylist={setStylist}
                stylistId={stylist.id}
                stylist={stylist}
            />
         
        </div>
    );
}

export default Index;

if (document.getElementById('mypage')) {
    ReactDOM.render(<Index />, document.getElementById('mypage'));
}
