import React from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Pubespace.css'
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'


const Pubespace = () => {
    return (
        <div className='espace_pub'>
            <Row>
                <Col sm={12}
                    md={4}>
                    <h1>
                        BKYC
                    </h1>
                    <p>
                        Is over
                    </p>
                </Col>
                <Col sm={12}
                    md={4}>
                    <h1>
                        100
                    </h1>
                    <p>
                        Customers
                    </p>
                </Col>
                <Col sm={12}
                    md={4}>
                    <h6>
                        follow us on social networks
                    </h6>
                    <div className='link_reseau'>
                        <a href='!#'>
                            <AiFillFacebook size={40}/></a>
                        <a href='!#'>
                            <AiFillTwitterSquare size={40}/>
                        </a>
                        <a href='!#'>
                            <AiFillInstagram size={40}/>
                        </a>
                    </div>

                </Col>

            </Row>
        </div>
    );
};

export default Pubespace;
