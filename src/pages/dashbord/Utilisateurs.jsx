import React from 'react';
import { users_table } from '../../data/data';
import { Link } from 'react-router-dom';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr'
import '../../styles/input.css'


const Utilisateurs = () => {


    return (
        <div className='m-9 menu_page text-left'> 
            <h3 className='mt-2 font-semibold'> Users </h3>
            <div className='mt-3'>
                <Link to='/admin/users/add'>
                    <Button variant='primary' > <GrAdd color="white"/> &nbsp; add user </Button>
                </Link>
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
        </div>
    );
};

export default Utilisateurs;