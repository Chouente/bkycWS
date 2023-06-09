import React, {useEffect, useState} from 'react';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody} from '@coreui/react';
import Button from '../../components/dashbord/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/pages/menu.css'
import {AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import '../../styles/input.css'
import { toast } from 'react-toastify';


import Axios from 'axios';



const Message = () => {

    const [messageList, setMessageList] = useState([])
    const history = useNavigate()

   

    useEffect(() => {
        Axios.get('http://localhost:5000/api/contactSee').then((response) => {
            setMessageList(response.data)
        })
    }, [])

    const deleteContact = (id) => {
        if(window.confirm('Are you sure that you wanted to delete this message ?')){
            Axios.delete(`http://localhost:5000/api/removeContact/${id}`)
            toast.success('Message deleted successfully')
            setTimeout(()=> history('/admin/dashbord'), 500);
        }
    }


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
                                messageList.map((val) => {
                                    return(
                                        <CTableRow key={val.id}>
                                            <CTableHeaderCell> {val.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {val.date} </CTableHeaderCell>
                                            <CTableHeaderCell> {val.fistName} </CTableHeaderCell>
                                            <CTableHeaderCell> {val.phoneNumber} </CTableHeaderCell>
                                            <CTableHeaderCell> {val.message} </CTableHeaderCell>
                                            <CTableHeaderCell> 
                                                <div className='bouton_part'> 
                                                <Link to={`messageView/${val.id}`}>
                                                    <Button variant='primary'><AiFillEye/></Button>
                                                </Link>   
                                                    <Button variant='secondary' onClick={()=> deleteContact(val.id)}><AiTwotoneDelete/></Button>
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