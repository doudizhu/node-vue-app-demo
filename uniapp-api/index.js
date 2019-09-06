const express = require('express');
const app = express();

// app.get('/',(req,res)=>{
//   res.json({msg:'hello aliyun nginx nodejs'});
// })
app.get('/api/datas',(req,res)=>{
  res.json({
    name: '米斯特李',
    wechat: '27732357'
  });
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`Server running on ${port}`);
})