import React from 'react'
import '../../styles/pages/productsPage.css'
import Navcoreui from '../../components/Navcoreui'
import { Row,Col,} from 'react-bootstrap'
import {BiCartAdd} from 'react-icons/bi'
import Footer from '../../components/Footer'
import {BsArrowLeft} from 'react-icons/bs'
import { Accordion } from 'react-bootstrap'
import BackToTupButton from '../../components/BackToTupButton'

//food image import
import pouletYassa from '../../images/pouletYassa.jpg'
import saucePistache from '../../images/saucePistache.jpg'
import rizsauce from '../../images/rizTomate.jpeg'
import tieboudiene from '../../images/tieboudiene.jpg' 


const RizSauce= () => {
    return(
        <div>
            <Navcoreui/>
            <div className='PageContend'>
                <div className='backBouton'>
                    <a href='/product'> <BsArrowLeft/> &nbsp; Back to menu </a>
                </div>
                <div className='Container'> 
                    <div className='title'>
                        <h1> Riz sauce tomate </h1>
                        <hr />
                    </div>
                    <div className='ProductInfo'>
                        <Row>
                            <Col md={6}>
                                <div className='ProductImage'>
                                    <img src={rizsauce} alt=' riz sauce tomate'/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='information'>
                                    <div className='ProductPrice'>
                                        <h3> 800 ₽ </h3>
                                    </div>
                                    
                                    <Accordion className="accordion accordion-flush">
                                        <Accordion.Item eventKey='0' className='item'>
                                            <Accordion.Header> Description </Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius quisquam consequuntur numquam quam? Accusantium, aliquid. 
                                            </Accordion.Body>
                                        </Accordion.Item> 
                                    </Accordion>
                                    <div className='form'>
                                        <Row>
                                            <Col md={4}></Col>
                                            <Col md={4}>
                                                <input type='number' placeholder='quantity' />
                                            </Col>
                                            <Col md={4}></Col>
                                        </Row> 
                                    </div>
                                    <div className='Addbouton'>
                                        <button type='button'> <BiCartAdd size={'2rem'}/> &nbsp; ADD TO CART </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div> 

                <div className='container'>
                    <Row>
                        <Col md={4}>
                            <a href='/product/saucePistache'>
                                <div className='cards'>
                                    <img src={saucePistache} alt='sauce pistache' />
                                    <h5> Sauce pistache </h5>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href='/product/pouletYassa'>
                                <div className='cards'>
                                    <img src={pouletYassa} alt='Poulet yassa' />
                                    <h5> Poulet Yassa </h5>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href='/product/tieboudiene'>
                                <div className='cards'>
                                    <img src={tieboudiene} alt='tieboudiene' />
                                    <h5> Tieboudiene </h5>
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                        <Col md={4}> 
                            <div className='Addbouton '>
                                <button type='button'> SEE ALL </button>
                            </div> 
                        </Col>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                    </Row>
                </div>
                <div className='Actions'>
                    <p> Find </p>
                    <p>the best of african meals </p> 
                    <p> with us...</p>
                    <div className='Addbouton'>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                        <Col md={4}> 
                            <div className='Addbouton '>
                                <button type='button'> ORDER NOW </button>
                            </div> 
                        </Col>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                    </Row>
                    </div>
                </div>
            </div>
            <Footer/>
            <BackToTupButton/>
        </div>
    )
}

export default RizSauce;