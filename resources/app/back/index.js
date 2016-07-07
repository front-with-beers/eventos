const koa = require('koa')
const port = 8000
const Router = require('koa-router')
const mongoose = require('mongoose')
const logSchema = require('./models/schemas/log')
const linkName = 'dataBase'
const dbUrl = 'mongodb://'+linkName+'/frontBeers'
const saveLog =  function  * (){
    return yield new Promise((resolve, reject)=>{
        const LogModel = mongoose.model('Log')
        const doc = new LogModel({'accessType':'access'})
        doc.save((err,data)=>{
            reject('DEU MERDA');
            return;
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        });
        
    })
}
const initApp = ()=>{

    const app = koa()
    const mainRoute = new Router()
    mainRoute.get('/hello',function * (){
        try{
            const data = yield saveLog()
            this.body = 'world '+data._id
            this.status = 200
            
        }
        catch(err){
            this.body = err
            this.status = 401
        }
    })
    app.use(mainRoute.routes())
    app.use(mainRoute.allowedMethods())
    app.listen(port)
    console.log('App started on port ',port);
}
mongoose.connect(dbUrl)
mongoose.connection.on('open',(ref)=>{
    initApp()
})