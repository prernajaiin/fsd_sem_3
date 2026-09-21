import http from 'http'

const server = http.createServer((req,res)=>{
    console.log("hello")
    res.writeHead(200,{
    "Content-Type": "application/json", 
    "Custom-header": "Hello"
    })
    const order = {
         orderId: 123,
         ordername: "iphone"
   }
   res.end(JSON.stringify(order))
})
const PORT = 3000
const ADDRESS = "127.0.0.1"
server.listen(PORT,ADDRESS,()=>{
    console.log("Server is running...");
    
})