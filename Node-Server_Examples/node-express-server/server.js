const express = require('express')

const app = express()

const router = require('./routes')

app.get("/",(req,res)=>{
	res.writeHead(200,{'Content-type':'text/plain'})
	res.end("Hello World")
})

app.get("/hi",(req,res)=>{
	res.writeHead(200,{'Content-type':'text/plain'})
	res.end("Hi World")
})

app.listen(8080,()=>{
	console.log('Server is running')
})