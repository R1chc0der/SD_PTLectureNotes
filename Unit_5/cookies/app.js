const express = require("express");
const app = express()
const PORT = 4003;
const log = console.log;
const cookieParser = require("cookie-parser");
const db = require("./db.json");


//provides us access to the middleware so that we can see what cookies are stored.

app.use(cookieParser());

// Build a route (GET) to see/test/create a cookie
app.get("/", (req, res)=>{
    //log(req.cookies);

    // Setting some cookie data for our GET response    
    res.cookie("cart",[
        {"item":'milk', "price":1.79}, 
        {"item":'cheese', "price": 2.99},
        {"item":'dog food', "price": 8.98}

    ]);

    // set cookie data for our GET request
    const check = req.cookies;
    //log(check);
    //log(check.cart);

    let offer;

    check.cart.every(obj =>{
        offer = db.filter(dbItem => {
            dbItem.item == obj.item && dbItem.price < obj.price
        })
        if(offer.length > 0 ){
            return false;
        }
        return true;    

 });
log(offer);
//res.send(check.cart);
if(offer.length > 0) {
    res.send({
        offer: `Our ${offer[0].item} is ${offer[0].price}!`,
        cookies: check
    })
} else {
    res.send({
        cookies: check,
    });

}

});

app.listen(PORT, log(`server is running on port: ${PORT}`));