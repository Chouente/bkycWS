import React, { useEffect, useState} from 'react';
import { menu_table } from '../../data/data';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody } from '@coreui/react';
import Button from '../../components/dashbord/Button';
import '../../styles/pages/menu.css'
import {AiFillEdit, AiTwotoneDelete, AiFillEye} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr'
import '../../styles/input.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';




const Menu = () =>{

    const [menuList, setMenuList] = useState();
    const [records, setRecords] = useState(menu_table);

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/menuSee`).then((response) => {
            setMenuList(response.data)
        })
    }, [])

    const deleteMenu = (id) => {
        if(window.confirm('are you sure that you wated to delete this menu ?')){
            Axios.delete(`http://localhost:5000/api/removeMenu/${id}`)
            toast.success('menu deleted successfully')
            setTimeout(500)
        }
    }

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
                <Link to='/admin/menu/add'>
                    <Button variant='primary'> <GrAdd color="white"/> &nbsp; add menu </Button>
                </Link>
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
                                menuList && menuList.map((item) => {
                                    return(
                                        <CTableRow key={item.id}>
                                            <CTableHeaderCell> {item.id} </CTableHeaderCell>
                                            <CTableHeaderCell> {item.name} </CTableHeaderCell>
                                            <CTableHeaderCell> 
                                                <div className='bouton_part'>
                                                    <Button variant='default'><AiFillEdit/></Button>  
                                                    <Link to={`menuView/${item.id}`}> <Button variant='primary'><AiFillEye/></Button> </Link>
                                                    <Button variant='secondary' onClick={()=> deleteMenu(item.id)}><AiTwotoneDelete/></Button>
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
    )
}

export default Menu