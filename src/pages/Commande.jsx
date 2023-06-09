import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import Button from '../components/dashbord/Button'
import {BiCartAdd} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import {product_table} from '../data/data'
import Navcoreui from "../components/Navcoreui";
import Footer from "../components/Footer";
import "../styles/pages/commande.css"


const Commande = () => {

    const [formField, setFormField] = useState([
        { nameProd:'', quant_commande:'', price:'' }
    ]);

    


    

    const handleFromChange = (event, index) => {
        const {name, value} = event.target;
        const list = [...formField];
        list [index][name]= value;
        setFormField(list);
    }

    const addOrder= () => {
        setFormField([...formField, { nameProd:'', quant_commande:'', price:'' }]);
    }

    const removeOrder = (index) =>{
        const list = [...formField];
        list.splice(index, 1);
        setFormField(list);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const formdata = new FormData()
    }

    console.log(formField)


    return(
        <div>
            <Navcoreui/>
            <div className="CommandePage shadow">
                <p>Fill in the information to place your order</p>
                            <form onSubmit={onSubmit}>
                                {/*<Row>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label> Last name </label>
                                            <input type='text' name='name_client'/>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label> Adress </label>
                                            <input type='text' name='adress'/>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label> Phone number </label>
                                            <input type='text' name='phone_number'/>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className='from_control'>
                                            <label>  livraison date </label>
                                            <input type='date' name='date_livr'/>
                                        </div>
                                    </Col>
    </Row>*/}
                                {formField.map((x, index) => {
                                    return(
                                        <div  >
                                            <Row  >
                                                <Col sm={12} md={3} key={formField.index}>
                                                    <div className='from_control'>
                                                        <label> Product name </label>
                                                        <input list='data' name='nameProd' 
                                                            onChange={event => handleFromChange(event, index)}
                                                        />
                                                        <datalist id='data'>
                                                            {product_table.map((product_table) =>
                                                                <option key={product_table.id}> 
                                                                    {product_table.name}
                                                                </option>
                                                            )}
                                                        </datalist>
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={2}>
                                                    <div className='from_control'>
                                                        <label> Price unitaire </label>
                                                        <input type='text' className='from-control' name='priceUnit' placeholder='20000' 
                                                            onChange={event => handleFromChange(event, index)}
                                                            disabled
                                                        />                                                
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={2}>
                                                    <div className='from_control'>
                                                        <label> Quantity </label>
                                                        <input type='number' name='quant_commande' 
                                                            onChange={event => handleFromChange(event, index)}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={3}>
                                                    <div className='from_control'>
                                                        <label> total </label>
                                                        <input type='text' className='from-control' name='price' placeholder='20000' 
                                                            onChange={event => handleFromChange(event, index)}
                                                            disabled
                                                        />                                                
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={2}>
                                                    <Row> 
                                                        <Col sm={6} md={6}>
                                                            {formField.length !==1 &&
                                                                <div className='bouton_style'>
                                                                    <Button variant='secondary' onClick={removeOrder}> <AiOutlineDelete/></Button>
                                                                </div>
                                                            }
                                                        </Col>
                                                    
                                                        <Col sm={6} md={6}>
                                                            {formField.length-1===index &&
                                                                <div className='bouton_style'>
                                                                    <Button variant='primary' onClick={addOrder}> <BiCartAdd/></Button>
                                                                </div>
                                                            }
                                                        </Col>
                                                            
                                                    </Row>  
                                                </Col>
                                                
                                            </Row>
                                        </div>
                                        
                                    );
                                })}
                                <Row>
                                    <Col sm={12} md={4} className='m-10 lastbtn'>
                                        <Button variant='primary' onSubmit={onSubmit}> Send older </Button>
                                    </Col>
                                </Row>
                            </form>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Commande;