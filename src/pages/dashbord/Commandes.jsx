import React from 'react';
import { order_table } from '../../data/data';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import '../../styles/input.css'


const Commandes = () => {



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
                            <CTableHeaderCell scope="col">Date com</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name client</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Phone number</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Adress</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Order</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                            <CTableHeaderCell scope="col">livr date</CTableHeaderCell>
                            <CTableHeaderCell scope="col"> Operation </CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                            {
                                order_table.map(item => {
                                    return(
                                        <CTableRow key={item.id}>
                                            <CTableHeaderCell> {item.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.orderDate} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.clientName} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.phoneNumber} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.localisation} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.order} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.price} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.livrDate} </CTableHeaderCell>
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
