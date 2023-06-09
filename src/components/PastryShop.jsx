import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../styles/product.css'
import { Data } from '../data/productData';

const Pastryshoop = Data.filter(Data => Data.cathegorie === 'pastryshoop')


const PastryShop = () => {
    return (
        <div className='product_list'>
                    <div className='list'>
                        <Row>
                            {Pastryshoop.map((Pastryshoop) => (
                                <Col md={3} sm={6} key={Pastryshoop}>
                                    <a>
                                        <div className='product'>
                                            <img src={Pastryshoop.image} alt={Pastryshoop.name}/>
                                            <h6> {Pastryshoop.name} </h6>
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