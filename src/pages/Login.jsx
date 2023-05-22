import React from 'react';
import '../styles/pages/login.css'
import {Row, Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg'

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className='login_page'>
            <Container>
                <div className='login_content'>
                    <Row>
                        <Col sm={12} md={5}>
                            <div className='left'></div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className='right'>
                                <img src={logo} alt='logo bkyc' />
                                <h1> Login </h1>
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
                                                <label> Password : </label>
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
                                                    <button onClick={() => navigate("/admin/dashbord")}> Connexion </button>
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                        
                                    </div>
                                    <p className='fpass'><i><a href='#!'>Forgot password?</a></i>  </p>
                                    <a href='/register'> Register </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
        </div>
    );
};

export default Login;