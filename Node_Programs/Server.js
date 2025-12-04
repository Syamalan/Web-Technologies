// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb');


// Employee Schema
const empSchema = new mongoose.Schema({
  ename: String,
  desig: String,
  dept: String,
  email: String,
});

const Emp = mongoose.model('Emp', empSchema);

// API Route to get employees
app.get('/', (req, res) => {
    res.send('Backend working!');
});
app.get('/api/emps', async (req, res) => {
  const emps = await Emp.find();
  res.json(emps);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
