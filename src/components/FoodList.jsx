import React from 'react';
import '../styles/product.css'
import {Row, Col} from 'react-bootstrap'
import pouletyassa from '../images/pouletYassa.jpg'
import pouletdg from '../images/PouletDG.jpeg'
import mafe from '../images/mafe.png'
import riztomate from '../images/rizTomate.jpeg'
import tieboudiene from '../images/tieboudiene.jpg'
import Saucepistache from '../images/saucePistache.jpg'


const FoodList = () => {
    return (
                <div className='product_list'>
                    <div className='list'>
                        <Row>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={pouletyassa} alt='pouletyassa'/>
                                            <h6> Poulet yassa </h6>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={pouletdg} alt='pouletdg'/>
                                            <h6> Poulet DG </h6>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={mafe} alt='mafe'/>
                                            <h6> Mafé poulet </h6>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={riztomate} alt='riztomate'/>
                                            <h6> Riz sauce tomate </h6>
                                        </div>
                                    </a>
                                </Col>
                        </Row>
                    </div>
                    <div className='list'>
                        <Row>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={tieboudiene} alt='tieboudiene'/>
                                            <h6> Tiebou diene </h6>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={Saucepistache} alt='sauce pistache'/>
                                            <h6> Sauce Pistache </h6>
                                        </div>
                                    </a>
                                </Col>
                        </Row>
                    </div>
                    
                </div>
    );
};

export default FoodList;