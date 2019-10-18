const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
//Routes
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');


//Connect Database
// const uri = process.env.MONGO_ATLAS_DB;
mongoose.connect('mongodb+srv://adebayoileri:ay2mLMqkNZgbwGP@trackman-kt05w.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
  }).catch(err=>{
    console.log(err)
  });

const connection = mongoose.connection;
connection.once('open',()=>{
  console.log('Mongo database was successfully created')
});

// Initialize express
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// CORS POLICY
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'PUT,DELETE,GET,PATCH,POST');
    return res.status(200).json({});
  }
  next();
});


//Middlewares
app.use('/api/v1', userRoutes);
app.use('/api/v1', expenseRoutes);

//PORT

const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
  console.log('App started on port 4300');
});

// Test good route
app.get('/', (req, res) => {
  res.json({ message: 'welcome to the expense tracker app api/v1' });
});

// Bad request
app.all('*', (req, res) =>
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Route unavailable on server.'
  })
);

module.exports = app;
