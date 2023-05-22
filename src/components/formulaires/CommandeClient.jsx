import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import '../../styles/home.css'
import Button from '../dashbord/Button'
import {BiCartAdd} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'

const CommandeClient = () => {

    const [formField, setFormField] = useState([
        { nameProd:'', quant_commande:'', price:'' }
    ])

    const handleFromChange = (event, index) => {
        let data = [...formField];
        data[index][event.target.name]= event.target.value;
        setFormField(data);
    }

    const addOrder= () => {
        let object = {
            nameProd:'',
            quant_commande:'',
            price:''
        }

        setFormField([...formField, object])
    }

    const removeOrder = (index) => {
        let data = [...formField];
        data.splice(index, 1);
        setFormField(data);
    }

    return (
        <div>
            <p>Fill in the information to place your order</p>
                    {formField.map((x, index) => {
                        return(
                                <Row className ='form' onSubmit={addOrder}>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label> Product name </label>
                                            <input type='text' name='nameProd' 
                                                onChange={event => handleFromChange(event, index)}
                                            />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label> Quantity </label>
                                            <input type='number' name='quant_commande' 
                                                onChange={event => handleFromChange(event, index)}
                                            />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label> Price </label>
                                            <input type='text' className='from-control' name='price' placeholder='20000' 
                                                onChange={event => handleFromChange(event, index)} 
                                                disabled
                                            />                                                
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <Row>
                                            <Col sm={6} md={3}>
                                                <div className='bouton_style'>
                                                    <Button variant='secondary' onClick={() => removeOrder(index)}> <AiOutlineDelete/></Button>
                                                </div>
                                            </Col>
                                            <Col sm={6} md={3}>
                                                <div className='bouton_style'>
                                                <Button variant='secondary' onClick={addOrder}> <BiCartAdd/></Button>
                                                </div>
                                            </Col>
                                        </Row>
                                            
                                        
                                    </Col>
                                </Row>
                            
                        );
                    })}
                            
        </div>
    );
};

export default CommandeClient;