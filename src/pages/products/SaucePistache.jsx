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
import mafePoulet from '../../images/mafe.png'
import pouletDG from '../../images/PouletDG.jpeg'
import pouletYassa from '../../images/pouletYassa.jpg'
import saucePistache from '../../images/saucePistache.jpg'



const SaucePistache= () => {
    return(
        <div>
            <Navcoreui/>
            <div className='PageContend'>
                <div className='backBouton'>
                    <a href='/product'> <BsArrowLeft/> &nbsp; Back to menu </a>
                </div>
                <div className='Container'> 
                    <div className='title'>
                        <h1> Sauce Pistache plantain </h1>
                        <hr />
                    </div>
                    <div className='ProductInfo'>
                        <Row>
                            <Col md={6}>
                                <div className='ProductImage'>
                                    <img src={saucePistache} alt=' poulet DG'/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='information'>
                                    <div className='ProductPrice'>
                                        <h3> 850 ₽ </h3>
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
                            <a href='/product/mafe'>
                                <div className='cards'>
                                    <img src={mafePoulet} alt='mafé poulet' />
                                    <h5> Mafé poulet </h5>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href='/product/pouletYassa'>
                                <div className='cards'>
                                    <img src={pouletYassa} alt='Poulet yassa' />
                                    <h5> Poulet yassa </h5>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href='/product/pouletDG'>
                                <div className='cards'>
                                    <img src={pouletDG} alt='pouletDG' />
                                    <h5> Poulet DG </h5>
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

export default SaucePistache;