const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const apiRoutes = require('./routes/api'); // Require the API routes module

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRoutes)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
