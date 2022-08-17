function cadastrarContato(){

    let url = "localhost:3000";

    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let celular = document.getElementById('celular');
    let mensagem = document.getElementById('mensagem');

    console.log(nome +" "+email+" "+celular+" "+mensagem+" "+url);
}

cadastrarContato()