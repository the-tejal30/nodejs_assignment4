const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// app.get('/', (request, response) => {
//     response.send('Hello World!');
// })


//Addition
app.post('/add',(req, res) => {
    const { num1, num2 } = req.body;

    if(typeof num1 === 'string' || typeof num2 === 'string') {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    let addition = num1 + num2;

    if(num1 < -1000000 || num2 < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(addition > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    
    res.status(200).json({
        status:'success',
        message:'the sum of given two numbers',
        sum: addition
    })

})

//Subtraction
app.post('/sub',(req, res) => {
    const { num1, num2 } = req.body;

    if(typeof num1 === 'string' || typeof num2 === 'string') {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    let Subtraction = num1 - num2;
    
    if(Subtraction < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Subtraction > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    
    res.status(200).json({
        status:'success',
        message:'the difference of given two numbers',
        difference: Subtraction
    })

})

//Multiplication
app.post('/multiply',(req, res) => {
    const { num1, num2 } = req.body;

    if(typeof num1 === 'string' || typeof num2 === 'string') {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    let Multiplication = num1 * num2;
    
    if(Multiplication < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Multiplication > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    
    res.status(200).json({
        status:'success',
        message:'The product of given numbers',
        result: Multiplication
    })

})


//Divide
app.post('/divide',(req, res) => {
    const { num1, num2 } = req.body;

    if(typeof num1 === 'string' || typeof num2 === 'string') {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    if(num2 === 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Cannot divide by zero'
        })
    }

    let Divide = num1 / num2;
    
    if(Divide < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Divide > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    
    res.status(200).json({
        status:'success',
        message:'The division of given numbers',
        result: Divide
    })

})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;