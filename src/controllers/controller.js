const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname + '/../database/data.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

module.exports = {
    index: (req,res)=> {
        
        res.render('index' , {data});
    } ,
    create: (req,res)=> {
        res.render('create');
    } ,
    store: (req,res)=> {
        let user = req.body

        let last = data.pop();

        console.log(last);

        if(last){
            user.id = last.id + 1;
            data.push(last);
        } else {
            user.id = 1;
        }

        data.push(user);

        fs.writeFileSync(jsonPath , JSON.stringify(data, null, ' '));

        res.redirect('/')
    } ,
    detail: (req,res)=> {
        let user = data.find(user => user.id == req.params.id)
        if(user){
            res.render('detail' , { user });
            console.log(user);
        } else {
            res.send('No existe el usuario');
        }
        
        
    } ,
    delete: (req,res)=> {
        let updateData = data.filter(user => user.id != req.params.id)
        fs.writeFileSync(jsonPath , JSON.stringify(updateData, null, ' '));
        res.redirect('/');
    } ,
    edit: (req,res)=> {
        let userFind = data.find(user => user.id == req.params.id);
        res.render('edit' , { userFind })
    } ,
    update: (req,res)=> {   
        let array = data.map(e => {
            if(e.id == req.params.id){
                e = req.body
                e.id = Number(req.params.id)
                return e;
            } else {
                return e;
            }
        })

        console.log(array);

        fs.writeFileSync(jsonPath , JSON.stringify(array, null, ' '));
        res.redirect('/');
    }
}