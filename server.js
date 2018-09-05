const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '2mb'}))
app.use(cookieParser());
app.use(express.static('./public')) 





app.get('*',(req,res,next)=>{
	res.redirect('/#' + req.originalUrl)
})

app.listen(port, () =>{
	console.log(`Server listening on port ${port}`)
})