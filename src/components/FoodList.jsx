import React from 'react';
import '../styles/product.css'
import {Row, Col} from 'react-bootstrap'
import { Data } from '../data/productData';

    const Food = Data.filter(Data => Data.cathegorie==='food');


const FoodList = () => {
    return (
                <div className='product_list'>
                    <div className='list'>
                        <Row>
                            {Food.map((Food) => (
                                <Col md={3} sm={6} key={Food.id}>
                                    <a>
                                        <div className='product'>
                                            <img src={Food.image} alt={Food.name}/>
                                            <h6> {Food.name} </h6>
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