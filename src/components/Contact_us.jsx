import React from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import '../styles/contact.css';
import { CFormInput, CFormTextarea } from '@coreui/react';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Contact_us = () => {
    return (
        <div className='contact_page' id='contact'>
            <h1> Contact us </h1>
            <p> Any questions or remarks? Just write us a message </p>

            <Container>
                <div className='contact_infos'>
                    <Row>
                        <Col sm={12} md={8}>
                            <div className='contact_left'>
                                <h6> Send us a message </h6>
                                <div className='form'>
                                    
                                    <div className='input_style'>
                                        <Row>
                                            <Col sm={12} md={6}>
                                                <CFormInput
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="First Name"
                                                    placeholder="enter your adress email..."
                                                />
                                            </Col>
                                            <Col sm={12} md={6}>
                                                <CFormInput
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="Phone Number"
                                                    placeholder="enter your phone number..."
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='input_style'>
                                        <CFormTextarea
                                            id="exampleFormControlTextarea1"
                                            label="Message"
                                            rows={3}
                                        >
                                        </CFormTextarea>
                                    </div>
                                    <div className='action'>
                                        <button>
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className='contact_right'>
                                <h6> Contact informations </h6>
                                <div className='info_infos'>
                                    <div className='phone_number infoContact'>
                                        <BsFillTelephoneFill size={20}/> <p> +7 966 054-44-48 </p>
                                    </div>
                                    <div className='localisation infoContact'>
                                        <FaMapMarkerAlt size={20}/> <p> Russia/.... </p>
                                    </div>
                                    <div className='localisation infoContact'>
                                        <MdEmail size={20}/> <p> mail@vkys.online </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contact_us;