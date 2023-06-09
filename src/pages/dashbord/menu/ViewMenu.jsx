import React , {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import Button from '../../../components/dashbord/Button';


const ViewMenu = () => {

        const [menu, setMenu] = useState({});
        const {id} = useParams();

        useEffect(() => {
            Axios
            .get(`${process.env.REACT_APP_BASE_API_URL}/api/menuSee/${id}`)
            .then((resp) => setMenu({ ...resp.data[0]}))
            .catch(err => console.log(err));
        }, [id]);

    return(

        <div>
            <div className='shadow m-10 p-10'>
                <h6> id <p> {menu.id} </p>  </h6>
                <h6> Name <p> {menu.name} </p> </h6>
            </div>
            <Link to='/admin/menu'>
                <Button variant='primary'> Back </Button>
            </Link>
                
        </div>
    )
}

export default ViewMenu;
