const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const blog = require('./routes/blogData');
const login = require('./routes/loginData');
const registerRouter = require('./routes/register');
const { LoginModel } = require('./model/login');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://adithyacse21:9lMdsKbeKkFDQnhk@cluster0.iuposea.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});


app.use('/blog', blog);
app.use('/login', login);
app.use('/register', registerRouter);

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

app.listen(2345, () => {
  console.log('Server listening on port 2345');
});
