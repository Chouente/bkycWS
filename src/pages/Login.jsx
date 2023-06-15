import React, { useState } from 'react';
import { useTranslation} from "react-i18next";
import '../styles/pages/login.css'
import {Row, Col, Container, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
//import Axios from 'axios';
//import { toast } from 'react-toastify';
import Axios from 'axios';
import Navigation from '../components/Navigation';
import { accountService } from '../_services/account.service';


const Login = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const [values, setValues]= useState({
        email: " ",
        pass: " "
    })

    const onSubmit = (e) => {
        e.preventDefault();
        {/* if(email.trim().length===0 || pass.trim().length===0){
            return toast.error('please enter all form fields')
        }

        const regExEmail=(value)=>{
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        }


        if(!regExEmail(email)){
            return toast.error('your email is not correct')
        }*/}

        Axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/login`, values)
            .then(res => {
            if(res.data.Status === "Success"){
                accountService.saveToken(res.data.access_token)
                navigate('/admin/dashbord')
            }else {
                alert(res.data.Error);
            }
        }).then(err => console.log(err))

    }
    

    return (
        <div>
            <Navigation/>
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
                                    <h1>{t('login')} </h1>
                                    <Form onSubmit={onSubmit}>
                                        <div className='form_control'>
                                            <Row>
                                                <Col md={6} sm={12}>
                                                    <label> {t('email')} : </label>
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <input type='email' name='email' 
                                                        onChange={(e)=> setValues({...values, email: e.target.value})}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='form_control'>
                                            <Row>
                                                <Col md={6} sm={12}>
                                                    <label> {t('pass')} : </label>
                                                </Col>
                                                <Col md={6} sm={6}>
                                                    <input type='password' name='pass' autoComplete="on"
                                                        onChange={(e)=> setValues({...values, pass: e.target.value})}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='bouton_content'>
                                            <Row>
                                                <Col md={6} sm={12}>
                                                    <div className='default'>
                                                        <button type='reset'> {t('cancel')} </button>
                                                    </div>
                                                </Col>
                                                <Col md={6} sm={12}>
                                                    <div className='actived'>
                                                        <button onClick={onSubmit}>{t('connect')} </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            
                                        </div>
                                    </Form>
                                    <div className='mt-3'>
                                        <Link to='/register'>
                                            <h6 className='text-center text-green font-bold'> {t('register')} </h6>
                                        </Link>
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

export default Login;