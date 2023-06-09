import React , {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import Button from '../../../components/dashbord/Button';


const ViewMessage = () => {

        const [user, setUser] = useState({});
        const {id} = useParams();

        useEffect(() => {
            Axios
            .get(`http://localhost:5000/api/seeContact/${id}`)
            .then((resp) => setUser({ ...resp.data[0]}))
            .catch(err => console.log(err));
        }, [id]);

    return(

        <div>
            <div className='shadow m-10 p-10'>
                <h6> id <p> {user.id} </p>  </h6>
                <h6> First name <p> {user.fistName} </p> </h6>
                <h6> Phone number <p> {user.phoneNumber} </p> </h6>
                <h6> Message <p> {user.message} </p> </h6>
            </div>
            <Link to='/admin/messages'>
                <Button variant='primary'> Back </Button>
            </Link>
                
        </div>
    )
}

export default ViewMessage;
