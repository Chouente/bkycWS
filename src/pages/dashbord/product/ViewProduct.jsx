import React , {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import Button from '../../../components/dashbord/Button';


const ViewProduct = () => {

        const [product, setProduct] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            Axios
            .get(`${process.env.REACT_APP_BASE_API_URL}/api/seeProduct/${id}`)
            .then((resp) => setProduct({ ...resp.data[0]}))
            .catch(err => console.log(err));
        }, [id]);

    return(

        <div>
            <div className='shadow m-10 p-10'>
                <h6> id <p> {product.result && product.result.id} </p>  </h6>
                <h6> Name <p> {product.name} </p> </h6>
                <h6> image <p><img src={product.image} alt={product.name} width='50px' height='50px'/></p> </h6>
                <h6> price <p> {product.price} </p> </h6>
                <h6> descript <p> {product.name} </p> </h6>
                <h6> cath <p> {product.name} </p> </h6>
            </div>
            <Link to='/admin/product'>
                <Button variant='primary'> Back </Button>
            </Link>
                
        </div>
    )
}

export default ViewProduct;
