import React, {useEffect, useState} from 'react';
import { message_table } from '../../data/data';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import '../../styles/input.css'

const Message = () => {
    return (
        <div className='m-9 menu_page text-left'> 
            <h3 className='mt-2 font-semibold'> Visitor's messages </h3>

            <div className='shadow-md mt-5 bg-white'>
                <div className='input_filter p-2'>
                    <input placeholder= 'search' type='text'/>
                </div>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Phone number</CTableHeaderCell>
                            <CTableHeaderCell scope="col">message</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Operations</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                            {
                                message_table.map(item => {
                                    return(
                                        <CTableRow key={item.id}>
                                            <CTableHeaderCell> {item.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.date} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.name} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.phoneNumber} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.message} </CTableHeaderCell>
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

export default Message;