import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../styles/product.css'
import { pastryshoopData } from '../data/productData';


const PastryShop = () => {
    return (
        <div className='product_list'>
                    <div className='list'>
                        <Row>
                            {pastryshoopData.map((pastryshoopData) => (
                                <Col md={3} sm={12} key={pastryshoopData}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={pastryshoopData.image} alt={pastryshoopData.name}/>
                                            <h6> {pastryshoopData.name} </h6>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                                
                        </Row>
                    </div>
                    
                </div>
    );
};

export default PastryShop;