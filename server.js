const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.use(express.static('dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
