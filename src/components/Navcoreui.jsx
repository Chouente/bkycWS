import React,{useState} from 'react';
import {CNavLink, CoreUISignetImg, CNavbar, CNavItem, CContainer, CNavbarBrand,CNavbarToggler,COffcanvas,COffcanvasHeader,COffcanvasTitle,CCloseButton, COffcanvasBody, CNavbarNav} from '@coreui/react' 
import Logo from '../images/logobkyc.svg'
import { useNavigate } from 'react-router-dom';
import '../styles/Navigation.css'

const Navcoreui = () => {
   
            const [visible, setVisible] = useState(false);
            const navigate = useNavigate();
            
            return (
                <CNavbar colorScheme="light" placement='fixed-top' className='navig'>
                    <CContainer fluid>
                        <CNavbarBrand href='#'>
                            <img
                                src={Logo}
                                alt=""
                                width="70"
                                height="50"
                                className="d-inline-block align-top"
                            /><h6>bkyc</h6> 
                        </CNavbarBrand>
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
                                    <CNavLink href="#" active>
                                        Home
                                    </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#">About</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#">Our products</CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink href="#"> Contact us </CNavLink>
                                    </CNavItem>
                                    <div className="d-grid gap-2 col-6 mx-auto monCompte">
                                        <button color="primary" onClick={() => navigate("/Login")}>Mon compte</button>
                                    </div>
                                    
                                    
                                </CNavbarNav>
                            </COffcanvasBody>
                        </COffcanvas>
                    </CContainer>
                </CNavbar>
            )
    
};

export default Navcoreui;