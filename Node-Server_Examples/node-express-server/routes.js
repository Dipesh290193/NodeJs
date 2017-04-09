const
	express = require('express')
	router = express.Router()

module.exports = () =>{
	router.get('/',(req,res)=>{
		res.send('Hello world')
	})

	router.get('hi',(req,res)=>{
		res.json({hi:'world'})
	})

	return router
}