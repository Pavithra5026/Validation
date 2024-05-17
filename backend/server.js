const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://127.0.0.1:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected...");
    })
    .catch((error) => {
        console.error("Error in connecting DB:", error);
    });


    const UserSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    });
    const User = mongoose.model('User', UserSchema);

    // app.post('/register', async (req, res) => {
    //     const { name, email, password } = req.body;
    //     const newUser = new User({ name, email, password });
    //     try {
    //         await newUser.save();
    //         res.status(201).send('User registered successfully');
    //     } catch (error) {
    //         res.status(400).send('Error registering user');
    //     }
    // });

    // app.get('/users', async (req, res) => {
    //     try {
    //         const users = await User.find();
    //         res.status(200).json(users);
    //     } catch (error) {
    //         res.status(400).send('Error retrieving users');
    //     }
    // });

    app.post('/register', async (req, res) => {
        const { name, email, password } = req.body;
        
        const newUser = new User({ name, email, password });
        
        try {
          await newUser.save();
          res.status(200).send('User registered successfully');
        } catch (error) {
          console.error('Error registering user:', error);
          res.status(500).send('Internal server error');
        }
      });

    app.post('/login', async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email, password });
          if (user) {
            res.status(200).send('Login successful');
          } else {
            res.status(401).send('Invalid email or password');
          }
        } catch (error) {
          console.error('Error during login:', error);
          res.status(500).send('Internal server error');
        }
      });



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});