const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.json({msg:'hello aliyun nginx nodejs'});
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`Server running on ${port}`);
})