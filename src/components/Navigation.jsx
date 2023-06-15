import React, {useState} from 'react'
import { useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'
import i18next from 'i18next';
import {CNavLink, CNavbar, CNavItem, CContainer, CNavbarBrand, CCollapse, CNavbarToggler, CNavbarNav} from '@coreui/react' 
import Button from './dashbord/Button';
import { DropdownButton } from 'react-bootstrap';
import {SlBasket} from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'



function Navigation() {
    const { t } = useTranslation()

    const langues = [
        {
            code: 'en',
            name:'English',
            contry_code : 'gb'
        },
        {
            code: 'fr',
            name: 'Français',
            contry_code : 'fr'
        },
        {
            code: 'ru',
            name: 'русский',
            contry_code : 'ru'
        }
    ]

    const { totalItems, totalUniqueItems } = useCart();
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate();
        return (
        <>
            <CNavbar expand="lg"  className="bg-white fixed-top shadow-sm">
                <CContainer fluid>
                    <CNavbarBrand href='/'>
                        <img
                            src={Logo}
                            alt=""
                            width="70"
                            height="50"
                            className="d-inline-block align-top"
                        /> 
                    </CNavbarBrand>
                    <Link to='/cart' className='cart mt-4'> 
                        <SlBasket size={'2rem'} color={'#E65100'}/> 
                        <span className='bage'> {totalUniqueItems} </span>
                    </Link>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className="ms-auto m-1">
                            <CNavItem>
                            <CNavLink href="/" active>
                            {t('lien1')}
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="product">{t('lien2')}</CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#contact">{t('lien3')}</CNavLink>
                            </CNavItem>
                            <div className='m-1'>
                                <DropdownButton variant='success' id="dropdown-autoclose-true" title={t('langue')}>
                                    {langues.map(({code, name, contry_code}) => (
                                        <button className='dropdown-item' onClick={()=>i18next.changeLanguage(code)} key={contry_code}>
                                            <span className={`flag-icon flag-icon-${contry_code} mx-2`}> </span>
                                            {name}
                                        </button>
                                    ))}
                                    
                                </DropdownButton>
                            </div>
                            <div className="m-1">
                                <Button variant='secondary' onClick={() => navigate("/Login")}>AUTHENTIFICATION </Button>
                            </div>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>

        );
}

export default Navigation;