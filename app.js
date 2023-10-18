import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import mongoose from 'mongoose';



import booksRoute from './routes/books.js';

app.use(express.json());

 const mongourl= '<enter the Mongodb Atlas URL here>'
 
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('MongoDB Atlas connection error:', error));


app.use('/books', booksRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
