import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../styles/pages/cart.css'
import { useCart } from 'react-use-cart'
import Button from '../components/dashbord/Button'
import {AiTwotoneDelete} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'
import Axios from 'axios';
import { toast } from 'react-toastify';



const Cart = ()=>{

    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();

    const [names, setNames] = useState(' ')
    const [phoneNumber, setPhoneNumber]= useState(' ')
    const [adresse, setAdresse]= useState(' ')
    const prices = cartTotal

    //const prod = JSON.stringify(items)


    const OrderSend = (e) => {
        e.preventDefault();
        if(names.length==0 || phoneNumber.length==0 || adresse==0){
            toast.error('Please provide value into each input')
        }else{
        for(let i=0; i<items.length; i++){
            const name = items[i].name
            const price = items[i].price
            const quant = items[i].quantity
            const orders = quant + name + price;

            console.log(orders)

                Axios.post('http://localhost:5000/api/addOrder', {
                    names,
                    phoneNumber,
                    adresse,
                    orders,
                    prices,
                    
                }).then(() => {
                    alert('successfull insert')
                }).catch((err) => toast.error(err.response.data));
                toast.success('Your order sended successfully')
                setTimeout(500);
            }
        }
        
    }
    

    if (isEmpty) return <div> <Navigation /> <div className='row'>
    <div className='col-3'>
        <div className='productReturn'>
            <a href='/product'> <BsArrowLeft/> &nbsp;product </a>
        </div>
    </div>
    <div className='col-7'>
        <h1 className='text-black'> Cart </h1>
    </div>
</div><h1 className='emptyCart'> Your Cart is empty </h1> <Link to='/product'> <Button variant='primary'> Products </Button> </Link>  </div>
    

    return(
        <div>
            <Navigation/>
            <div className='Cartcontent pb-20'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='productReturn ml-5'>
                                <Link to='/product'> <Button variant='secondary'> <BsArrowLeft/> </Button> </Link>
                            </div>
                        </div>
                        <div className='col-7'>
                            <h1 className='text-black'> Cart </h1>
                        </div>
                    </div>
                        
                    <div className='row m-10'>
                        <div className='col-md-8' >
                            <div className='CartBegin'>
                                <p> Cart total items: ({totalItems}) </p>
                                <table className=' table shadow '>
                                    <thead>
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, index)=> {
                                            return(
                                                <tr key={index}>
                                                    <td>
                                                        <img src={item.image} style={{height:'4rem', width:'6rem'}} />
                                                    </td>
                                                    <td> {item.name} </td>
                                                    <td> {item.price} ₽</td>
                                                    <td> 
                                                        <Button className='btn btn-success sm-2'
                                                            onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}
                                                        > - </Button>
                                                            {item.quantity}
                                                        <Button className='btn btn-success sm-2'
                                                            onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}
                                                        > + </Button>
                                                    </td>
                                                    <td>  
                                                        
                                                        <Button variant='secondary'
                                                            onClick={()=>removeItem(item.id)}
                                                        > <AiTwotoneDelete/> </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-auto ms-auto price'>
                                <h6> Total price: <span> {cartTotal} ₽</span> </h6>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='customer_info'>
                                <h5> Customer informations </h5>
                                <div className='row'>
                                    <div className='col-12 p-2'>
                                        <input type='text' placeholder='name' onChange={(e)=>setNames(e.target.value)}/>
                                    </div>
                                    <div className='col-12 p-2'>
                                        <input type='text' placeholder='phone number' onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                    </div>
                                    <div className='col-12 p-2'>
                                        <input type='text' placeholder='adresse' onChange={(e)=>setAdresse(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                    </div>
                    
                    <div className='col-auto mt-10 pb-10'>
                        <Button variant='primary' onClick={emptyCart}> Clean cart </Button>
                        <Button variant='secondary' onClick={OrderSend}> Send order </Button>
                    </div>
            </div>
            
        </div>
    )
}

export default Cart;
