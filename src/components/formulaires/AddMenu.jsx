import React, {useState} from 'react';
import '../../styles/pages/formulaire.css'
import Button from '../dashbord/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from 'axios';



const AddMenu = () => {

    const [names, setNames] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        if(names.length==0){
            toast.error('entrer the name of your new menu')
        }else {
            Axios.post('http://localhost:5000/api/addMenu', {names})
            .then(
                toast.success('you are succeful add a new menu')
            )
            .catch(err => console.log(err))
        }
    }

    return (
        <div className='page '>
            <Link to='/admin/menu'>
                <Button variant='primary'> Back </Button>
            </Link>
                
                <div className='title'>
                    <h3> Add menu </h3>
                </div>
            <form className='shadow p-10 m-10' onSubmit={onSubmit}>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div className='form_control'>
                            <label> name of menu </label>
                            <input type='text' name='name_menu' onChange={(e)=>{setNames(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='mt-10'>
                    <Button variant='secondary' onClick={onSubmit}> Add </Button>
                </div>
            </form>
            
        </div>
    );
}

export default AddMenu