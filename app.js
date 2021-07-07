const express = require('express');
const mongoose = require('mongoose');

require("./models/User");
const User = mongoose.model('user');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/Spa', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.get("/", (req, res) => {
    return res.json({titulo: "Bem vindo"});
});

app.post("/user", (req, res) => {
    const user = User.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Usuario não foi cadastrado com sucesso!"
        });
    
        return res.status(200).json({
            error: false,
            message: "Usuario cadastrado com sucesso!"
        })
  });
});

app.put("/user", (req, res) => {
    const user = User.findByIdAndUpdate(req.params._id, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Usuario não foi atualizado com sucesso!"
        });
    
        return res.status(200).json({
            error: false,
            message: " Usuario foi atualizado com sucesso!"
        })
    });
});

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});