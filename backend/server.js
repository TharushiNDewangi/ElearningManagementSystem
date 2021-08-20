const express = require('express');
const mongoose = require('mongoose');
//const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const path = require('path');

//console.log('db connected');

const authuser_route = require('./routes/user-auth.js');
const studentInstitute_route = require('./routes/Studentforinstitute');
const classschedule_route = require('./routes/Class');
const fees_route = require('./routes/classfees');
const salary_route = require('./routes/salary');

const PORT = process.env.PORT || 8065;

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));

const URL = process.env.MONGODB_URL;
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dew:asdqwe123@cluster1.jkocv.mongodb.net/sellerdetails?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
// .then(() => console.log( 'Database Connected' ))
// .catch(err => console.log( err ));
const connection = mongoose.connection;
connection
    .once('open', () => {
        console.log('db connected');
    })
    .catch((err) => console.log(err));

//routes

<<<<<<< HEAD
app.use('/api',authuser_route)
app.use('/api',studentInstitute_route)
app.use('/api',classschedule_route)
app.use('/api',fees_route )
app.use('/api',salary_route )
=======
app.use('/api', authuser_route);
app.use('/api', studentInstitute_route);
app.use('/api', classschedule_route);
app.use('/api', fees_route);
//app.use('/api',Address_route )
>>>>>>> 3db4a0fa7ffce65c065cbec944a4aa2d07f39493

app.listen(PORT, () => {
    console.log('server running');
});
