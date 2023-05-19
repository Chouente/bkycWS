import React from 'react';
import {Col, Row} from 'react-bootstrap'

const AddUser = () => {
    return (
        <div>
            <div className='form'>
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> User name </label>
                                        <input type='text' name='userName'/>
                                    </div>
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className='from_control'>
                                        <label> User password </label>
                                        <input type='password' name='userPassword'/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <div className='from_control'>
                                        <label> Avatar </label>
                                        <input type='file' name='userAvatar'/>
                                    </div>
                                </Col>
                            </Row>
            </div>
        </div>
    );
};

export default AddUser;