//importing json-server dependency/package
const jsonServer=require('json-server')

//create server
const server=jsonServer.create()

//create middleware
const middilewear=jsonServer.defaults()

//implementing middleware to server
server.use(middilewear)

// initializing router with resourced
const router=jsonServer.router('db.json')

//implementing server to server
server.use(router)


//defining PORT number
const PORT=process.env.PORT || 4000


//activating server
server.listen(PORT,()=>{
    console.log("Server is running in PORT:",PORT)
})