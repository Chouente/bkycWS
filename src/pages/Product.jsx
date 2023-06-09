import React from 'react'
import '../styles/pages/productsPage.css'
import Navigation from '../components/Navigation'
import {Row} from 'react-bootstrap'
import Footer from '../components/Footer'
import BackToTupButton from '../components/BackToTupButton'
import ProductCart from '../components/ProductCart'

//les data
import { Data } from '../data/productData'


    const Food = Data.filter(Data => Data.cathegorie==='food');
    const Brevage = Data.filter(Data => Data.cathegorie==='brevage');
    const Pastryshoop = Data.filter(Data => Data.cathegorie === 'pastryshoop')


const Product= () => {

    return(
        <div>
            <Navigation/>
            <div className='PageContend'>
                <div className='Container'> 
                    <div className='title'>
                        <h1>Menu</h1>
                        <hr />
                    </div>
                </div>

                <div className='Menu'>
                    <div className='FoodMenu'>
                        <h1> Food </h1>
                        <Row>
                            {Food.map((item, index) =>(
                                <ProductCart  
                                    image={item.image} 
                                    link={item.link}
                                    price={item.price}
                                    name = {item.name} 
                                    key={index}  
                                    item = {item} 
                                />
                            ))}
                        </Row>
                    </div>
                    <div className='PastryMenu mt-10'>
                        <h1> Pastryshoop </h1>
                        <Row>
                            {Pastryshoop.map((item, index) =>(
                                <ProductCart  
                                    image={item.image} 
                                    link={item.link}
                                    price={item.price}
                                    name = {item.name} 
                                    key={index}   
                                    item = {item}
                                />
                            ))}
                        </Row>
                    </div>
                    <div className='BrevageMenu mt-10'>
                        <h1> Brevages </h1>
                        <Row>
                            {Brevage.map((item, index) =>(
                                <ProductCart  
                                image={item.image} 
                                link={item.link}
                                price={item.price}
                                name = {item.name} 
                                key={index} 
                                item = {item}  
                            />
                            ))}
                        </Row>
                    </div>
                    <div className='SpiceMenu mt-10'>
                        <h1> Spices </h1>
                    </div>
                </div>
            </div>
            <Footer/>
            <BackToTupButton/>
        </div>
    )
}

export default Product;