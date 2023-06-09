import React, { useState, useEffect } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../styles/contact.css';
import { CFormInput, CFormTextarea } from '@coreui/react';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

import { toast } from 'react-toastify';


import Axios from 'axios';

const Contact_us = () => {

    const [firstName, setFirstName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const history = useNavigate()
    /* fonction pour l'envois du formulaire de contact */

    const submitContactForm = (e)=>{
        e.preventDefault();
        if(firstName.length==0 || phoneNumber.length==0 || message==0){
            toast.error('Please provide value into each input')
        }else{
        Axios.post('http://localhost:5000/api/contactSubmit',
            {
                firstName, 
                phoneNumber, 
                message,
            }).then(() => {
                alert('successfull insert')
            }).catch((err) => toast.error(err.response.data));
            toast.success('Your message sended successfully')
            setTimeout(500);

        }
    }


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
                                <form>

                                    <div className='input_style'>
                                        <Row>
                                            <Col sm={12} md={6}>
                                                <CFormInput
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="First Name"
                                                    placeholder="enter your adress email..."
                                                    name='firstName'
                                                    onChange={(e)=>{setFirstName(e.target.value)}}
                                                />
                                            </Col>
                                            <Col sm={12} md={6}>
                                                <CFormInput
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="Phone Number"
                                                    placeholder="enter your phone number..."
                                                    name='PhoneNumber'
                                                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='input_style'>
                                        <CFormTextarea
                                            id="exampleFormControlTextarea1"
                                            label="Message"
                                            rows={3}
                                            name='Message'
                                            onChange={(e)=>{setMessage(e.target.value)}}
                                        >
                                        </CFormTextarea>
                                    </div>
                                    <div className='action'>
                                        <button onClick={submitContactForm} type={'submit'}>
                                            Send message
                                        </button>
                                    </div>
                                </form>
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
                                        <MdEmail size={20}/> <p> contact@vkys.online </p>
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