import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './styles.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addToCart } from '../redux/features/cartSlice';
import cardData from './CartData'

function Home() {

    // const {carts}=useSelector(state=>state.allCart)
    // console.log(carts);

    const dispatch=useDispatch();
    
    const sendData=(e)=>{
        dispatch(addToCart(e));
    }

    const [cartdata, setCartdata] = useState(cardData);
    // console.log(cartdata);
    return (
        <>
            <section className='iteam_section mt-4 container bg-gray'>
                <h2 className='px-4 ' style={{ fontWeight: 400 }}>Restaurants in comilla are open now</h2>
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {
                        cartdata.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: '22rem', border: 'none' }}  key={element.id}  className='hove mb-4' >
                                        <Card.Img src={element.imgdata} variant='top' className='cd' />
                                        <div className="card_body">

                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}&nbsp; ★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between">
                                                <h5>{element.address}</h5>
                                                <span>{element.price}</span>
                                            </div>

                                            <div className="extra"></div>
                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
                                                <Button
                                                    style={{ width: '150px', background: '#ff3054db', border: 'none' }}
                                                    onClick={()=>sendData(element)}
                                                    variant='outline-light' className='mb-2 mt-2'
                                                >Add to Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Home