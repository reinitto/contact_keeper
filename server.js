const express = require('express');
const PORT = process.env.port || 5000;

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'welcome ot the contactkeepr api' });
});

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
