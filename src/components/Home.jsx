import React,{useState} from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import { CModal, CModalHeader, CModalBody,CModalFooter, CModalTitle } from '@coreui/react'
import '../styles/home.css';
import CommandeClient from './formulaires/CommandeClient';
import Button from '../components/dashbord/Button'



const Home = () => {
    const [visible, setVisible] = useState(false)
    
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
                        <CModalTitle>Place an order</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CommandeClient/>
                    </CModalBody>
                    <CModalFooter>
                        <Button variant="default" onClick={() => setVisible(false)}>
                        Close
                        </Button>
                        <Button variant="primary">Send the order</Button>
                    </CModalFooter>
                </CModal>
            </Container>
        </div>
    );
};

export default Home;