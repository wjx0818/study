const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.use(require('cors')())

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/element-admin',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

const Article = mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    body:{type:String}
}));

app.get('/', async (req, res) =>{
    res.send('Hello World!');
})
//增加文章
app.post('/api/articles', async (req,res)=>{
    const article = await Article.create(req.body);
    //console.log('awd');
    res.send(article)
})
//获取所有文章
app.get('/api/articles', async (req,res)=>{
    const articles = await Article.find();
    //console.log(articles);
    res.send(articles);
})
//删除文章
app.delete('/api/articles/:id', async (req,res)=>{
    await Article.findByIdAndDelete(req.params.id);
    res.send({
        status:true
    });
})

//根据id获取文章
app.get('/api/articles/:id', async (req,res)=>{
    const article1 = await Article.findById(req.params.id);
    res.send(article1);
})
//更改文章
app.put('/api/articles/:id', async (req,res)=>{
    const article1 = await Article.findByIdAndUpdate(req.params.id,req.body);
    res.send(article1);
})

const port = 3000;
app.listen(port, () => console.log(`http://localhost:${port}`))