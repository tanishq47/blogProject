

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
//
// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/myDB",
// {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
//   console.log("Connection Succesfull");
// }).catch((error)=>{
//   console.log("Error");
// });


const mongoose = require("mongoose");

// creating a database 
mongoose.connect("mongodb://localhost:27017/myDatabase", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})