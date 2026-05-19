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

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Invalid numbers.' });
    }

    let result;
    switch (operation) {
        case 'add':      
            result = num1 + num2; 
            break;
        case 'subtract': 
            result = num1 - num2; 
            break;
        case 'multiply': 
            result = num1 * num2; 
            break;
        case 'divide':
            if (num2 === 0) return res.status(400).json({ error: 'Cannot divide by zero.' });
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: `Unknown operation: ${operation}` });
    }

    res.json({ result });
});


app.listen(PORT, () => {
    console.log(`Calculator API running on http://localhost:${PORT}`);
});