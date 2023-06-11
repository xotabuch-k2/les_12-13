import express from 'express';
import mongoose from 'mongoose';
import { User } from './model/user.js';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import jwt from 'jsonwebtoken';
const secretKey = 'your-secret-key';

const checkToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Invalid token' });
        } else {
          next();
        }
      });
    } else {
      return res.status(401).json({ message: 'Token not found' });
    }};


const csrf = csurf({ cookie: true });

const PORT = 3000;
const url = 'mongodb+srv://xotabuch-k2:Nfhenbyj68@learn.7mjqj3b.mongodb.net/client';
const app = express();

app.use(cookieParser());
app.use(express.static('css'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'pug');

mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});

app.get('/', csrf, async (req, res) => {
    try {
     const title = {}
     let isAdmin = false;
     if(req.cookies.username) {
      title.text = `You are in administrator mode, to logout press `;
      title.link = 'http://localhost:3000/logout';
      title.linkMessage = 'log out';
      isAdmin = true;
     } else {
      title.text = 'If you are admim please ';
      title.link = 'http://localhost:3000/login';
      title.linkMessage = 'log in';
      isAdmin = false;
     }
      const users = await User.find();
      res.render('index', {users, title, isAdmin, csrfToken: req.csrfToken()})
    } catch (err){
        console.log(err);
}});

app.post('/set-cookie', csrf, async (req, res) => {
    const {name, password} = req.body;
    if (name == 'admin' && password == '123') {
        const token = jwt.sign({ name }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token);
        res.cookie('username', name);
        res.redirect('/');
    } else {
    res.redirect('/login');
    }
});

app.post('/add', async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.redirect('/');
    } catch(err){
        console.log(err);
    }
});

app.get('/edit/:id',csrf, checkToken, async (req, res) => {
    try {
    const user = await User.findById(req.params.id);
    if (req.cookies.username) {
    res.render('edit', {user, csrfToken: req.csrfToken()});
    } else {
    res.redirect('/');
    }
    } catch (err) {
    console.log(err);
    }
});

app.post('/change-user/:id',csrf, async (req, res)=> {
    try{
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
        res.render('edit', { csrfToken: req.csrfToken() });
    } catch(err){
        console.log(err);
    }
});


app.delete('/remove/:id', async (req, res) => {
    try {
    if (req.cookies.username) {
    await User.deleteOne({_id: req.params.id});
    res.status(200).json({message: 'User deleted'});
    } else {
    res.status(403).json({message: 'Unauthorized'});
    }
    } catch (err) {
    console.log(err);
    }
});

app.get('/login', csrf, (req, res) => {
    if (req.cookies.username) {
    res.redirect('/');
    } else {
    res.render('login', { csrfToken: req.csrfToken() });
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('token');
    res.redirect('/');
});