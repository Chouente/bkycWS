import React from 'react';
import '../styles/pages/login.css'
import {Row, Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logobkyc.svg'


const Register = () => {

    const navigate = useNavigate();
    return (
        <div className='register_page'>
            <Container>
                <div className='login_content'>
                    <Row>
                        <Col sm={12} md={5}>
                            <div className='left'></div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className='right'>
                                <img src={logo} alt='logo bkyc' />
                                <h1> Register </h1>
                                <div className='form'>
                                    <div className='form_control'>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <label> User name : </label>
                                            </Col>
                                            <Col md={6} sm={6}>
                                                <input type='text' name='userName'/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='form_control'>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <label> Phone number : </label>
                                            </Col>
                                            <Col md={6} sm={6}>
                                                <input type='text' name='userName'/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='form_control'>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <label> Password : </label>
                                            </Col>
                                            <Col md={6} sm={6}>
                                                <input type='password' name='userName'/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='form_control'>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <label> Confirm password : </label>
                                            </Col>
                                            <Col md={6} sm={6}>
                                                <input type='password' name='userName'/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='bouton_content'>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <div className='default'>
                                                    <button> Cancel </button>
                                                </div>
                                            </Col>
                                            <Col md={6} sm={12}>
                                                <div className='actived'>
                                                    <button onClick={() => navigate("/login")}> Register </button>
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                        
                                    </div>
                                    <div className='login_link'>
                                        <a href='/Login'> Login </a>
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

export default Register;