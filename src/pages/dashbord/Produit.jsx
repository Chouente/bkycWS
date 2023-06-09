import React, {useEffect, useState} from 'react';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
//import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr'
//import '../../styles/input.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';




const Produit = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/productSee`).then((response) => {
            setProductList(response.data)
        })
    }, [])


    const deleteProduct = (id) =>{
        if(window.confirm('are you sure that you wanted to delete this product?')){
            Axios.delete(`${process.env.REACT_APP_BASE_API_URL}/removeProduct/${id}`)
            toast.success('product delected successfully')
            setTimeout(500);
        }
    }


    return (
        <div className='m-9 menu_page text-left'> 
            <h3 className='mt-2 font-semibold'> Products </h3>
            <div className='mt-3'>
                <Link to='/admin/products/add'>
                    <Button variant='primary'> <GrAdd color="white"/> &nbsp; add product </Button>
                </Link>
            </div>
            
            <div className='shadow-md mt-5 bg-white'>
                <div className='input_filter p-2'>
                    <input placeholder= 'search' type='text'/>
                </div>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Product type</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Operations</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                            {
                                productList[0] && productList.map((productList) => {
                                    return(
                                        <CTableRow key={productList.id}>
                                            <CTableHeaderCell> {productList.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {productList.name} </CTableHeaderCell>
                                            <CTableHeaderCell> {productList.ProductType} </CTableHeaderCell>
                                            <CTableHeaderCell> <img src={`http://localhost:5000/images/${productList.image}`} alt={productList.name} width={50} height={50}  className='rounded'/> </CTableHeaderCell>
                                            <CTableHeaderCell> {productList.price} </CTableHeaderCell>
                                            <CTableHeaderCell> 
                                                <div className='bouton_part'>
                                                    <Button variant='default'><AiFillEdit/></Button>  
                                                <Link to={`productsView/${productList.id}`}>
                                                    <Button variant='primary'><AiFillEye/></Button>
                                                </Link>
                                                    <Button variant='secondary' onClick={()=>deleteProduct(productList.id)}><AiTwotoneDelete/></Button>
                                                </div>
                                                 
                                            </CTableHeaderCell>
                                        </CTableRow>
                                    )
                                })
                            }
                    </CTableBody>
                    
                </CTable>
            </div>    
        </div>
    );
};

export default Produit;