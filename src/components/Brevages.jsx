import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../styles/product.css'
import { brevagetables } from '../data/productData';


const Brevages = () => {
    return (
                    <div className='list'>
                        <Row>
                            {brevagetables.map((brevagetables) => (
                                <Col md={3} sm={12} key={brevagetables.id}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={brevagetables.image} alt={brevagetables.name}/>
                                            <h6> {brevagetables.name} </h6>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                                
                        </Row>
                    </div>
    );
};

export default Brevages;