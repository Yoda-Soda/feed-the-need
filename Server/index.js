const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello Kelly, Katie, Dave, Jan, Mike. Good luck with the Sausage Roll TEamwork!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})