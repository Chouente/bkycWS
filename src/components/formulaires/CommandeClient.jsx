import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import '../../styles/home.css'
import Button from '../dashbord/Button'
import {IoIosAdd} from 'react-icons/io'



const Menu = [
    { value: 0, label: 'selectionner une cathegorie' },
    { value: 1, label: 'Food' },
    { value: 2, label: 'Spice' },
    { value: 3, label: 'Beverage' },
    { value: 4, label: 'Pastry shop' },
];

const Menu_name = {
    'Food': [
        {value :1, label:'Poulet yassa'},
        {value :2, label:'Poulet DG'},
        {value:3,  label:'Mafé poulet'},
        {value:4, label:'Tiebou diene'},
        {value:5, label:'Riz sauce tomate'},
        {value:6, label:'Sauce pistache'},
    ],
    'Spice': [

    ],
    'Beverage':[
        {value:1, label:'Kossam'},
    ],
    'Pastry shop':[
        {value:1, label:'Gateaux'},
        {value:2, label:'croquettes'},
        {value:3, label:'pili'}
    ]

    
}



const CommandeClient = () => {

    const [selectedState, setSelectedState] = useState('')


    return (
        <div>
            <p>Fill in the information to place your order</p>
                        <div className='form'>
                            <Row>
                                <Col sm={12} md={3}>
                                    <div className='from_control'>
                                        <label> Last name </label>
                                        <input type='text' name='name_client'/>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div className='from_control'>
                                        <label> Localisation </label>
                                        <input type='text' name='localisation'/>
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
                                        <label> Date de livraison </label>
                                        <input type='date' name='date_livraison'/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={3}>
                                    <div className='from_control'>
                                        <label> Cathegorie menu </label>
                                        <select onChange={(e) => { setSelectedState(e.target.value)}} name='cath_menu'>
                                            {Menu.map((option) => (
                                                <option value={option.label} key={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                   <div className='from_control'>
                                        <label> Nom du menu </label>
                                        {selectedState && <select name='name_menu'>
                                            {
                                                Menu_name[selectedState]?.map((option) =>(
                                                    <option value={option.label} key={option.value}> {option.label} </option>
                                                ))
                                            }
                                        </select>
                                        }
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div className='from_control'>
                                        <label> Quantité </label>
                                        <input type='text' name='quantite_commande'/>
                                    </div>
                                </Col>
                                <Col sm={12} md={3}>
                                    <div className='bouton_style'>
                                        <Button variant='secondary'> <IoIosAdd/> add more</Button>
                                    </div>
                                    
                                </Col>
                            </Row>
                                
                        </div>
        </div>
    );
};

export default CommandeClient;