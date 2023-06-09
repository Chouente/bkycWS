import React,{useState} from 'react';
import {CNavLink, CNavbar, CNavItem,CFormSelect, CContainer, CNavbarBrand,CNavbarToggler,COffcanvas,COffcanvasHeader,COffcanvasTitle,CCloseButton, COffcanvasBody, CNavbarNav} from '@coreui/react' 
import Logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import '../styles/Navigation.css'
import {SlBasket} from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'


const Navcoreui = () => {

    const { totalItems, totalUniqueItems } = useCart();
   
            const [visible, setVisible] = useState(false);
            const navigate = useNavigate();
            
            return (
                <CNavbar colorScheme="light" placement='fixed-top' className='navig'>
                    <CContainer fluid>
                        <CNavbarBrand href='/'>
                            <img
                                src={Logo}
                                alt=""
                                width="70"
                                height="50"
                                className="d-inline-block align-top"
                            /><h6>Bkyc</h6> 
                        </CNavbarBrand>
                        <Link to='/cart' className='cart'> 
                            <SlBasket size={'2rem'} color={'#E65100'}/> 
                            <span className='bage'> {totalUniqueItems} </span>
                        </Link>
                        <CNavbarToggler
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                            onClick={() => setVisible(!visible)}
                        />
                        <COffcanvas id="offcanvasNavbar" placement="end" portal={false} visible={visible} onHide={() => setVisible(false)}>
                            <COffcanvasHeader>
                                <COffcanvasTitle>
                                    <img
                                        src={Logo}
                                        alt=""
                                        width="100"
                                        height="100"
                                        className="d-inline-block align-top"
                                    />

                                </COffcanvasTitle>
                                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                            </COffcanvasHeader>
                            <COffcanvasBody>
                                <CNavbarNav>
                                    <CNavItem>
                                    <CNavLink href="/" active>
                                        Home
                                    </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#about">About</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="/product">Our products</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="/#contact"> Contact us </CNavLink>
                                    </CNavItem>
                                    <div className='row'>
                                        <div className='col-3'></div>
                                        <div className='col-6'>
                                            <CFormSelect size="sm" className="mb-3 mt-9" aria-label="Large select example">
                                                <option value='english'>English</option>
                                                <option value="french">Frensh</option>
                                                <option value="russian">Russian</option>
                                            </CFormSelect>
                                        </div>
                                        <div className='col-3'></div>
                                    </div>
                                    <div className="d-grid gap-2 col-6 mx-auto monCompte">
                                        <button color="primary" onClick={() => navigate("/Login")}>S'identifier</button>
                                    </div>
                                    
                                    
                                </CNavbarNav>
                            </COffcanvasBody>
                        </COffcanvas>
                    </CContainer>
                </CNavbar>
            )
    
};

export default Navcoreui;