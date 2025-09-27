const express = require('express');
const app = express();
const port=3000
const InventoryRoutes=require('./Routes/InventoryRoutes')
app.use(express.json())
app.get('/', (req, res) => {
  res.send("Inventory API is Running");
});
app.get('/health',(req, res)=>{
     res.json({ status: "ok", message: "Server is healthy" });
})
app.use('/Items',InventoryRoutes)

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});