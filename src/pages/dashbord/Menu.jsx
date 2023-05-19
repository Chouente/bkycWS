import React, { useState} from 'react';
import { menu_table } from '../../data/data';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import { CModal, CModalHeader, CModalBody,CModalFooter, CModalTitle, CButton } from '@coreui/react'
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr'
import '../../styles/input.css'
import AddMenu from '../../components/formulaires/AddMenu';


export default function Menu(){

    const [visible, setVisible] = useState(false)

    const [records, setRecords] = useState(menu_table);

    function handleFilter(event){
        const newData = records.filter(row => { 
            return row.name?.toLowerCase().includes(event.target.value?.toLowerCase())
            })

            setRecords(newData)
    }



    return(
        <div className='m-9 menu_page text-left'> 
            <h3 className='mt-2 font-semibold'> Menu </h3>
            <div className='mt-3'>
                <Button variant='primary' onClick={() => setVisible(!visible)}> <GrAdd color="white"/> &nbsp; add menu </Button>
            </div>
            
            <div className='shadow-md mt-5 bg-white'>
                <div className='input_filter p-2'>
                    <input placeholder= 'search' onChange={handleFilter}  type='text'/>
                </div>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Operations</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                            {
                                menu_table.map(item => {
                                    return(
                                        <CTableRow key={item.id}>
                                            <CTableHeaderCell> {item.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.name} </CTableHeaderCell>
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



            <CModal visible={visible} onClose={() => setVisible(false)} className='commande'>
                    <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Place an order</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <AddMenu/>
                    </CModalBody>
                    <CModalFooter>
                        <Button variant="default" onClick={() => setVisible(false)}>
                        Close
                        </Button>
                        <Button variant="secondary">Add menu</Button>
                    </CModalFooter>
            </CModal>  
        </div>
    )
}