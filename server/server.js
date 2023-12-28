import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'react_db',
});
//fetch all record 
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: 'Error inside the server' });
    return res.json(result);
  });
});

//add 
app.post('/addStudents', (req,res)=>{
  const sql = 'INSERT INTO students (`name`,`email`) VALUES(?)';
  const values = [
    req.body.name,
    req.body.email
  ]
  db.query(sql, [values],(err, result) => {
    if (err) return res.json({ Message: 'Error inside the server' });
    return res.json(result);
  });
});
//read
app.get('/read/:id', (req, res) => {
  const sql = 'SELECT * FROM students WHERE id=?';
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: 'Error inside the server' });
    return res.json(result);
  });
});

// update 
app.put('/update/:id', (req, res) => {
  const sql = 'UPDATE students SET `name`=?, `email`=? WHERE id=?';
  const id = req.params.id;
  db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
    if (err) return res.json({ Message: 'Error inside the server' });
    return res.json(result);
  });
});

//delete
app.delete('/delete/:id', (req, res) => {
  const sql = 'DELETE FROM students WHERE id=?';
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: 'Error inside the server' });
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log('Listening');
});
