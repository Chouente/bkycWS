import React, {useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap'
import Button from '../dashbord/Button';
import '../../styles/pages/formulaire.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from 'axios';



const AddProduct = () => {

    const [imageProduct, setImageProduct]= useState('')
    const [productName, setProductName]= useState('')
    const [productPrice, setProductPrice]= useState('')
    const [cathProduct, setCathProduct]= useState('')
    const [description, setDescription]= useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('image', imageProduct);
        formdata.append('name', productName);
        formdata.append('price', productPrice);
        formdata.append('cath', cathProduct);
        formdata.append('descript', description) 

        if(imageProduct.length==0 || productName.length==0 || productPrice.length==0 || cathProduct.length==0 || description.length==0){
            toast.error('entrer all input to add a new product')
        }else{
            Axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/addProduct`, formdata)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }

    }


    return (
        <div className='page'>
            <Link to='/admin/products'>
                <Button variant='primary'> Back </Button>
            </Link>
                
                <div className='title'>
                    <h3> Add product </h3>
                </div>
                    <div className='shadow m-5 p-5'>
                        <h6> Enter all the input to add a new product </h6>
                        <Form onSubmit={onSubmit} encType="multipart/form-data">
                            <Row>
                                <Col sm={12} md={4}>
                                    <div className='from_control'>
                                        <label> Product name </label>
                                        <input type='text' name='productName'
                                            onChange={(e)=>{setProductName(e.target.value)}}
                                        />
                                    </div>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className='from_control'>
                                        <label> Product Price </label>
                                        <input type='text' name='productPrice'
                                            onChange={(e)=>{setProductPrice(e.target.value)}}
                                        />
                                    </div>
                                </Col>
                                <Col sm={12} md={4}>
                                    <div className='from_control'>
                                        <label> Cathegorie product </label>
                                        <select name='cathProduct' onChange={(e)=>{setCathProduct(e.target.value)}}>
                                            <option value=''> --Select cathegory-- </option>
                                            <option value='food'> Food </option>
                                            <option value='pastryshoop'> Pastryshoop </option>
                                            <option value='brevage'> Brevage </option>
                                            <option value='spice'> Spice </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={5}>
                                    <div className='from_control'>
                                        <label> Image </label>
                                        <input type='file' name='imageProduct'
                                            onChange={(e)=>{setImageProduct(e.target.files[0])}}
                                        />
                                    </div>
                                </Col>
                                <Col sm={12} md={7}>
                                    <div className='from_control'>
                                        <label> Product description </label>
                                        <textarea name="description" placeholder="This is a description." 
                                            onChange={(e)=>{setDescription(e.target.value)}}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Button variant='secondary' onClick={onSubmit}> Add product </Button>
                        </Form>
                    </div>
            
        </div>
    );
};

export default AddProduct;