import React, {useState} from 'react';
import '../styles/pages/login.css'
import {Row, Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg'
import Navigation from '../components/Navigation';
import Axios from 'axios'
import { toast } from 'react-toastify';


const Register = () => {
    const [values, setValues] = useState({
        userName:' ',
        email: ' ',
        pass:' '
    })

    const onSubmit = (e)=> {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/register`, values)
        .then(res => {
            toast.success('Your user is added successfully')
        })
        .then(res => {
            toast.error('error for your operation')
        })
    }


   
    return (
        <div>
            <Navigation/>
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
                                                    <input type='text' name='userName'
                                                        onChange={(e)=> setValues({...values, userName: e.target.value})}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='form_control'>
                                            <Row>
                                                <Col md={6} sm={12}>
                                                    <label> email : </label>
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <input type='text' name='email'
                                                        onChange={(e)=> setValues({...values, email: e.target.value})}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='form_control'>
                                            <Row>
                                                <Col md={6} sm={12}>
                                                    <label> Password : </label>
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <input type='password' name='pass'
                                                        onChange={(e)=> setValues({...values, pass: e.target.value})}
                                                    />
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
                                                        <button onClick={onSubmit}> Register </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </div>
                                        <div className='login_link'>
                                            <a href='/Login' > Login </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Register;