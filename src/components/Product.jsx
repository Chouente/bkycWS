import React from 'react';
import { useState } from 'react';
import '../styles/product.css'
import { Container } from 'react-bootstrap';
import {CNav, CNavItem, CNavLink,CTabContent, CTabPane } from '@coreui/react'
import FoodList from './FoodList';
import PastryShop from './PastryShop';
import Brevages from './Brevages';



const Product = () => {

    const [activeKey, setActiveKey] = useState(1)


    return (
        <div className='product_page'>
            <Container>
                <h1> Our menus </h1>

                <div className='menu_menu' >
                    <div className='menu_nav'>
                        <CNav variant="pills" role="tablist" className='justify-content-center'>
                            <CNavItem>
                                <CNavLink
                                href="#!"
                                active={activeKey === 1}
                                onClick={() => setActiveKey(1)}
                                >
                                Food
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                href="#!"
                                active={activeKey === 2}
                                onClick={() => setActiveKey(2)}
                                >
                                pastry shop
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                href="#!"
                                active={activeKey === 3}
                                onClick={() => setActiveKey(3)}
                                >
                                Beverage
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                href="#!"
                                active={activeKey === 4}
                                onClick={() => setActiveKey(4)}
                                >
                                Spices
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </div>
                    
                    <div className='menu_content'>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                <FoodList/>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                                <PastryShop/>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                                <Brevages />
                            </CTabPane>
                        </CTabContent>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Product;