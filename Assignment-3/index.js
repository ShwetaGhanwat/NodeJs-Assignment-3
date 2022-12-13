const fs =require("fs")
const http=require("http")

http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.write(data);
        res.end()
    })
}).listen(3000, () => console.log("The server is up at port 3000"));
