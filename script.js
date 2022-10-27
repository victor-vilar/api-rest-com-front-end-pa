const formulario = document.querySelector("form");

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();    
    cadastrar();    
})

function cadastrar() {
    
    const dados ={
        nome: formulario.children.item(0).value,
        email:formulario.children.item(1).value,
        senha:formulario.children.item(2).value,
        telefone:formulario.children.item(3).value,
    }

    fetch("http://localhost:8080/cadastrar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        method:"POST",
        body: JSON.stringify(dados)
    })
    .then((res)=> {
        console.log(res)
    })
    .catch((res)=> {
        console.log(res)
    })

    limpar();
}

function limpar(){
    formulario.children.item(0).value = "";
    formulario.children.item(1).value = "";
    formulario.children.item(2).value = "";
    formulario.children.item(3).value = "";
}