const express = require('express')
const app = express()

app.get('*', (req, res) => {
  return res.send(req.path);
})

app.listen(3001)
