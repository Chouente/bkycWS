import React,{useState} from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import { CModal, CModalHeader, CModalBody,CModalFooter, CModalTitle } from '@coreui/react'
import '../styles/home.css';
import { useTranslation} from "react-i18next";
import CommandeClient from './formulaires/CommandeClient';
import Button from '../components/dashbord/Button'
import { Link } from 'react-router-dom';



const Home = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation()


    return (

        <div className='home_page' id='home'>
            <Container>
                <Row>
                    <Col md={6} sm={12} className='action_part'>
                        <h2> Bkyc </h2>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus mollitia deleniti quas earum necessitatibus porro corrupti totam incidunt dicta dolores ipsum sunt, neque quasi non possimus voluptate? Libero, cupiditate necessitatibus. </p>
                         <Link to='/product'> <button >ORDER NOW</button> </Link>
                    </Col>
                </Row>

                <CModal size="xl" visible={visible} onClose={() => setVisible(false)} className='commande'>
                    <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Customer informations</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                            <CommandeClient/>
                    </CModalBody>
                    <CModalFooter>
                        <Button variant="default" onClick={() => setVisible(false)}>
                        Cancel
                        </Button>
                        <Button variant="primary" >Next</Button>
                    </CModalFooter>
                </CModal>
            </Container>
        </div>
    );
};

export default Home;