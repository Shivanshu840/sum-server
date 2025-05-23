import express from "express"
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000


app.get("/sum", (req:any,res:any)=>{

   const {a, b} = req.body;

   let sum:number = parseInt(a+b);
   return res.status(200).json({sum});
})


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})


