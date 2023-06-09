import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../styles/product.css'
import { Data } from '../data/productData';

const Brevage = Data.filter(Data => Data.cathegorie==='brevage');


const Brevages = () => {
    return (
                    <div className='list'>
                        <Row>
                            {Brevage.map((Brevage) => (
                                <Col md={3} sm={6} key={Brevage.id}>
                                    <a>
                                        <div className='product'>
                                            <img src={Brevage.image} alt={Brevage.name}/>
                                            <h6> {Brevage.name} </h6>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                                
                        </Row>
                    </div>
    );
};

export default Brevages;