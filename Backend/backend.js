const express=require('express');
const app=express();
const cors = require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    const todos={
        id:'2',
        title:'Hey',
        description:'Hello Bro'
    };
    res.send(todos)
});
app.listen(3000,()=>{
    console.log("Server at 3000");
})