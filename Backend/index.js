const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');
const multer = require('multer')
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const salt = 10;


const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'bkycDB',
    connectionLimit:10,
});

app.use(cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

app.use(express.static('public'));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:true}));


//formulaire de contact

//api pour afficher les différents messages
app.get("/api/contactSee", (req, res) => {
    const sqlSelect = "SELECT * FROM contact ORDER BY id DESC";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

//api pour afficher le message d'un seule user
app.get("/api/seeContact/:id", (req, res) => {
    const _id = req.params;
    const {id} = _id
    const sqlGet = "SELECT * FROM contact WHERE id= ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    });
});


//api pour supprimer un message par l'Admin
app.delete("/api/removeContact/:id",  cors(), (req, res) => {
    const {id} = req.params;
    const sqlRemove = " DELETE FROM contact WHERE id=? ";
    db.query(sqlRemove, id, (err, result) => {
        console.log(err)
    })
})


//api pour prendre les données entré par l'user et enregistrer dans la base de donnée
app.post("/api/contactSubmit", (req, res) => {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    const firstName = req.body.firstName
    const phoneNumber = req.body.phoneNumber
    const message = req.body.message

    const sqlInsert = "INSERT INTO contact (date, fistName, phoneNumber, message) VALUES (NOW(),?,?,?)";
    db.query(sqlInsert, [firstName, phoneNumber, message], (err, result) => {
        console.log(err)
    })
});





//page register (addUser côté administrateurs)
app.post('/api/register', (req, res) => {
    const sqlInsert = "INSERT INTO users (`userName`, `email`, `pass`) VALUES (?)";
    bcrypt.hash(req.body.pass.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "error for hassing password"})
        const values = [
            req.body.userName,
            req.body.email,
            hash
        ]
        db.query(sqlInsert, [values], (err, result)=> {
            if(err) return res.json({Error: "Inserting data error for server"})
            return res.json({Status: "Success"})
        })
    })

})


//page login
app.post('/api/login', (req, res) => {
    const sqlSelect = " SELECT * FROM users WHERE email = ? ";
    db.query(sqlSelect,[req.body.email], (err, data) => {
        if (err) return res.json({Error: "login error server"});
        if(data.length > 0 ){
            bcrypt.compare(req.body.pass.toString(), data[0].pass, (err, response) => {
                if(err) return res.json({Error: "Password compare error"})
                if(response){
                    const userName = data[0].userName
                    const token = jwt.sign({userName}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token)
                    return res.json({Status: "Success"});
                }else{
                    return res.json({Error: "Password not match"});
                }
            })

        }else {
            return res.json({Error: "no email existed"});
        }
    })
})





// configuration des fichiers
const MIME_TYPES = {
    "image/png": "png",
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/git": "gif",
    "image/webp": "webp"
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

// page product
app.post("/api/addProduct", upload.single('image'),(req, res) => {
        const image = req.file.filename;
        const name = req.body.name;
        const price = req.body.price;
        const cath = req.body.cath;
        const descript = req.body.descript;


        const sqlInsert = "INSERT INTO product (name, image, price, description, productType) VALUES (?,?,?,?,?)"
        db.query(sqlInsert, [name, image,price, descript, cath], (err,result) => {
            console.log(err)
        })

        console.log(image, name, price, cath, descript)
    });


app.get("/api/productSee", (req, res) => {
    const sqlSelect = "SELECT * FROM product";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})


app.get("api/seeProduct/:id", (req,res) => {
    const _id = req.params
    const {id} = _id
    const sqlGet="SELECT * FROM product WHERE id=?";
    db.query(sqlGet, id, (err, result) => {
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});


app.get("api/removeProduct/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM product WHERE id=?"
    db.query(sqlRemove, id, (err, result) => {
        console.log(err)
    })
})









//page menu de dashbord
app.post("/api/addMenu", (req, res) => {
    const names = req.body.names
    const sqlInsert = "INSERT INTO menu (name) VALUES (?)";
    db.query(sqlInsert, [names], (err, result) => {
        console.log(names)
    })
})


app.get("/api/menuSee", (req, res) =>{
    const sqlSelect = "SELECT * FROM menu";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/menuSee/:id", (req, res) => {
    const _id = req.params;
    const {id} = _id

    const sqlGet = "SELECT * FROM menu WHERE id=?";
    db.query(sqlGet, id, (err, result) => {
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})

app.delete("/api/removeMenu/:id", (req,res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM menu WHERE id = ?";
    db.query(sqlRemove, id, (err,result) => {
        console.log(err)
    })
})


//page cart
app.post("/api/addOrder", (req, res) => {
    const prices = req.body.prices
    const names = req.body.names
    const phoneNumber = req.body.phoneNumber
    const adresse = req.body.adresse
    const orders = req.body.orders
    const sqlInsert = "INSERT INTO orders (customerName, phoneNumber, adresse, orderss, totalPrice, dateOrders) VALUES (?,?,?,?,?, NOW())"
    db.query(sqlInsert, [names, phoneNumber, adresse, orders, prices], (err, result) => {
        console.log(err)
    })
})

app.get("/api/seeOrders", (req, res)=> {
    const sqlSelect = "SELECT * FROM orders ORDER BY id DESC";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})



const port = process.env.PORT || 5000

app.listen(port, console.log(`server running on port ${port}`));