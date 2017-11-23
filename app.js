const express=require('express')
const bp=require('body-parser')
const app=express()

app.use(bp.text())


app.use((req, res) => {
	console.log(req)       // ...log it to stdout
	res.status(200).end()  // ...and send an empty but OK response
})

app.listen(3000, 
	() => console.log('Example app.js listening on port 3000!'))
