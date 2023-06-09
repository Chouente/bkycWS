import React from 'react'
import '../styles/pages/productsPage.css'
import Button from '../components/dashbord/Button'
import { Row,Col,} from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const ProductCart = (props) => {

    const { addItem } = useCart();

    return(

    <Col md={4}  sm={6}className='mt-5'>
        <a >
            <div className='cards'>
                <img src={props.image} alt={props.name} />
                    <Row>
                        <Col sm={12} md={8}>
                            <h5> {props.name} </h5>
                        </Col>
                        <Col sm={12} md={4}>
                            <h3> {props.price} ₽ </h3>
                        </Col>
                    </Row>
            </div>
        </a>
        <Button variant='primary' onClick={() => addItem(props.item)}> Add to cart </Button>
    </Col>


)}

export default ProductCart;


