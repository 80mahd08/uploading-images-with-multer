const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
const { uid } = require('uid')
const path = require('path');



const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'multerexample'
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    }
    ,
    filename: (req, file, cb) => {
        const uniqueFileName = uid() + '-' + file.originalname
        cb( null , uniqueFileName )
    }
})

const multerUpload  = multer({
    storage: storage
})



db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('connected to database');
})

app.get('/dispImages', (req, res) => {
    const sql = "SELECT * FROM image";
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result)
    })
})


app.post('/uploadImg', multerUpload.single('image'), (req, res) => {
    const sql = "INSERT INTO image (imgName) VALUES (?)";
    db.query(sql, [req.file.filename], (err, result) => {
        if (err) {
            throw err;
        }
        console.log('uploaded successfully');
    })
})

app.listen(port, (err) => {
    if (err) {
        throw err
    }
    console.log(`server is running on port ${port} and the url is http://localhost:${port}/`);
})