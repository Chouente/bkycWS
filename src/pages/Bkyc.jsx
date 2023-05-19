import React from 'react';

//import component of page
import Navcoreui from '../components/Navcoreui';
import Home from '../components/Home';
import Product from '../components/Product';
import Pubespace from '../components/Pubespace';
import Contact_us from '../components/Contact_us';
import Footer from '../components/Footer';
import BackToTupButton from '../components/BackToTupButton';

const Bkyc = () => {
    return (
        <div>
            <Navcoreui />
            <Home />
            <Product/>
            <Pubespace />
            <Contact_us />
            <Footer />
            <BackToTupButton/>
        </div>
    );
};

export default Bkyc;