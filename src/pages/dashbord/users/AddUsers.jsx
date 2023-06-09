import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import Button from '../../../components/dashbord/Button'
import Axios from 'axios'
import { toast } from 'react-toastify';


const AddUsers = () => {

    const [values, setValues] = useState({
        userName:' ',
        email: ' ',
        pass:' '
    })

    const onSubmit = (e)=> {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/register', values)
        .then(res => {
            toast.success('Your user is added successfully')
        })
        .then(res => {
            toast.error('error for your operation')
        })
    }



    return(
        <div className='page'>
            <Link to='/admin/users'>
                <Button variant='primary'> Back </Button>
            </Link>
                
                <div className='title'>
                    <h3> Add users </h3>
                </div>
                    <div className='shadow m-5 p-5'>
                        <h6> Enter all the input to add a new users </h6>
                        <Form onSubmit={onSubmit} encType="multipart/form-data">
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> User name </label>
                                        <input type='text' name='usersName'
                                            onChange={(e)=> setValues({...values, userName: e.target.value})}
                                        />
                                    </div>
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> Email adresse </label>
                                        <input type='text' name='email'
                                            onChange={(e)=> setValues({...values, email: e.target.value})}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> Password </label>
                                        <input type='text' name='pass'
                                            onChange={(e)=> setValues({...values, pass: e.target.value})}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Button variant='secondary' onClick={onSubmit}> Add product </Button>
                        </Form>
                    </div>
            
        </div>
    )
}

export default AddUsers