const express = require('express');
const cors = require('cors');
const app = express()
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());


//routes
//calculate endpoint
app.post('/api/calculate', (req, res) => {
    const {num1, num2, operation} = req.body;
    console.log('Received:', {num1, num2, operation});

    res.json({message: 'Calculate endpoint hit.'});
});


app.listen(PORT, () => {
    console.log(`Calculator API running on http://localhost:${PORT}`);
});