import React,{useState} from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import { CModal, CModalHeader, CModalBody,CModalFooter, CModalTitle } from '@coreui/react'
import '../styles/home.css';
import CommandeClient from './formulaires/CommandeClient';
import Button from '../components/dashbord/Button'



const Home = () => {
    const [visible, setVisible] = useState(false)

    const [visible2, setvisible2] = useState(false)
    
    return (

        <div className='home_page' id='home'>
            <Container>
                <Row>
                    <Col md={6} sm={12} className='action_part'>
                        <h2> BKYC </h2>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus mollitia deleniti quas earum necessitatibus porro corrupti totam incidunt dicta dolores ipsum sunt, neque quasi non possimus voluptate? Libero, cupiditate necessitatibus. </p>
                        <button onClick={() => setVisible(!visible)}> ORDER NOW </button>
                    </Col>
                </Row>

                <CModal size="xl" visible={visible} onClose={() => setVisible(false)} className='commande'>
                    <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Customer informations</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                            <Row>
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
                            </Row>
                    </CModalBody>
                    <CModalFooter>
                        <Button variant="default" onClick={() => setVisible(false)}>
                        Cancel
                        </Button>
                        <Button variant="primary" onClick={() =>setvisible2(!visible2)}>Next</Button>
                    </CModalFooter>
                </CModal>
                

                <CModal size="xl" visible={visible2} onClose={() => setvisible2(false)} className='userInfo'>
                    <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Place your order</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CommandeClient/>
                    </CModalBody>
                    <CModalFooter>
                        <Button variant="default" onClick={() => setvisible2(false)}>
                        Cancel
                        </Button>
                        <Button variant="primary">Send the order</Button>
                    </CModalFooter>
                </CModal>
            </Container>
        </div>
    );
};

export default Home;