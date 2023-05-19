import React,{useState} from 'react';
import { users_table } from '../../data/data';
import { CModal, CModalHeader, CModalBody,CModalFooter, CModalTitle,} from '@coreui/react'
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr'
import '../../styles/input.css'
import AddUser from '../../components/formulaires/AddUser';


const Utilisateurs = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className='m-9 menu_page text-left'> 
            <h3 className='mt-2 font-semibold'> Users </h3>
            <div className='mt-3'>
                <Button variant='primary' onClick={() => setVisible(!visible)}> <GrAdd color="white"/> &nbsp; add user </Button>
            </div>
            
            <div className='shadow-md mt-5 bg-white'>
                <div className='input_filter p-2'>
                    <input placeholder= 'search'  type='text'/>
                </div>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Avatar</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Operations</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                            {
                                users_table.map(item => {
                                    return(
                                        <CTableRow key={item.id}>
                                            <CTableHeaderCell> {item.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.name} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.password} </CTableHeaderCell>
                                            <CTableHeaderCell> <img src={item.avatar} alt={item.name} width={50} height={50} className='rounded-full'/>  </CTableHeaderCell>
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
                        <AddUser/>
                    </CModalBody>
                    <CModalFooter>
                        <Button variant="default" onClick={() => setVisible(false)}>
                        Close
                        </Button>
                        <Button variant="primary">add user</Button>
                    </CModalFooter>
            </CModal> 
        </div>
    );
};

export default Utilisateurs;