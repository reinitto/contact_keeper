const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const PORT = process.env.port || 5000;

const app = express();

//Connect Database
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//   return res.json({ msg: 'welcome ot the contactkeepr api' });
// });

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
