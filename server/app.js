require('dotenv').config();
const express = require('express');
const app = express();
const cors=require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


app.use(express.json());
app.use(cors());

//check out api;

app.post("/api/create-checkout-session",async(req,res)=>{

    // const {products} = req.body;
    // // console.log('products',products)

    // const lineItems = products.map((product)=>({
        
    //     price_data:{
    //         currency:"usd",
    //         product_data:{
    //             name:product.dish,
    //             images:[product.imgdata]
    //         },
    //         unit_amount:product.price * 100,
    //     },
    //     quantity:product.qnty
    // }));

    // const session = await stripe.checkout.sessions.create({

    //     payment_method_types:["card"],
    //     line_items:lineItems,
    //     mode:"payment",
    //     success_url:"http://localhost:3000/success",
    //     cancel_url:"http://localhost:3000/cancel",
    // });

    // res.json({id:session.id})

    try {
        const {products} = req.body;
    // console.log('products',products)

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));

    // console.log(lineItems);
    // res.json({url:'hi'});

        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items:lineItems,
            success_url:"http://localhost:3000/success",
            cancel_url:"http://localhost:3000/cancel",

        })
    
        res.json({url:session.url});

    } catch (error) {
        res.status(500).json({error:error.message});
    }
 
})



app.listen(7000,()=>{console.log("server listening on 7000")})