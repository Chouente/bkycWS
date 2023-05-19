import React from 'react';
import {Col, Row} from 'react-bootstrap'



const AddProduct = () => {

    const product_type = [
        { value: 1, label: 'Food' },
        { value: 2, label: 'Spice' },
        { value: 3, label: 'Beverage' },
        { value: 4, label: 'Pastry shop' },
    ];
    return (
        <div>
            <div className='form'>
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> Product name </label>
                                        <input type='text' name='productName'/>
                                    </div>
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> Product Price </label>
                                        <input type='text' name='productPrice'/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> Cathegorie product </label>
                                        <select name='cath_product'>
                                            {product_type.map((option) => (
                                                <option value={option.label} key={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                        
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> Image </label>
                                        <input type='file' name='image_product'/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                
                            </Row>
            </div>
            
        </div>
    );
};

export default AddProduct;