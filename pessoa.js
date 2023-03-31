import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

class Pessoa {
  constructor(nome, email, idade, hobbies) {
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.hobbies = hobbies;
  }
}

const pessoa1 = new Pessoa("Bruna", "bruna@contato.com.br", "23", [
  "Fotografar",
  "Correr",
]);
const pessoa2 = new Pessoa("Laiane", "laiane@contato.com", "22", [
  "Tocar violão",
  "cantar",
]);
const pessoa3 = new Pessoa("Gabriella", "gabi@contato.com.br", "10", [
  "brincar com o cachorro",
]);

app.get("/pessoa", (req, res) => {
  res.send(pessoa1);
});

app.get("/pessoas", (req, res) => {
  res.send(JSON.stringify([pessoa1, pessoa2, pessoa3]));
});

app.listen(port, () => {
  console.log("App executando na porta " + port);
});
