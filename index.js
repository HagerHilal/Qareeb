const express = require('express')
const bodyParser = require ( "body-parser")

// Chalk for colorful logs
const chalk = require ("chalk")



const app = express()


app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send(`<h1>      ♥ Welcome to Qareeb Site ♥                  </h1>
`);
})


const port = process.env.PORT | 1234
app.listen(port, () => console.log(`Server up and running on port ${port} `))
