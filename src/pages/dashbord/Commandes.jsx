import React, {useState, useEffect} from 'react';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import '../../styles/input.css'
import Axios from 'axios';


const Commandes = () => {

    const [ordersList, setOrdersList] = useState([])
   

    useEffect(() => {
        Axios.get('http://localhost:5000/api/seeOrders').then((response) => {
            setOrdersList(response.data)
        })
    }, [])


    return (
        <div className='m-9 menu_page text-left'> 
            <h3 className='mt-2 font-semibold'> Order </h3>
            
            <div className='shadow-md mt-5 bg-white'>
                <div className='input_filter p-2'>
                    <input placeholder= 'search'   type='text'/>
                </div>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">orders Date</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name client</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Phone number</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Adress</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Order</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                            <CTableHeaderCell scope="col"> Operation </CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                            {
                                ordersList.map((item) => {
                                    return(
                                        <CTableRow key={item.id}>
                                            <CTableHeaderCell> {item.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.dateOrders} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.customerName} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.phoneNumber} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.adresse} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.orderss} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.totalPrice} </CTableHeaderCell>
                                            <CTableHeaderCell> 
                                                <div className='bouton_part'>
                                                    <Button variant='default'><AiFillEdit/></Button>  
                                                    <Button variant='primary'><AiFillEye/></Button>
                                                    <Button variant='secondary'><AiTwotoneDelete/></Button>
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

export default Commandes;
