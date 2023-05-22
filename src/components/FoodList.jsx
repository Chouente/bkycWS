import React from 'react';
import '../styles/product.css'
import {Row, Col} from 'react-bootstrap'
import { foodtables } from '../data/productData';


const FoodList = () => {
    return (
                <div className='product_list'>
                    <div className='list'>
                        <Row>
                            {foodtables.map((foodtables) => (
                                <Col md={3} sm={12} key={foodtables.id}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={foodtables.image} alt={foodtables.name}/>
                                            <h6> {foodtables.name} </h6>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                            
                        </Row>
                    </div>
                    
                    
                </div>
    );
};

export default FoodList;