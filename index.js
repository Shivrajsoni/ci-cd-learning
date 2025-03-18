const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "Hi from Server"
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running on the port :${PORT}`)
})
