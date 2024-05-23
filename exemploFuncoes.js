function saudacao() {
    let nomePessoa = prompt("DIgite seu nome")

    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 13) {

        window.alert("Bom-dia " + nomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("Boa tarde" + nomePessoa)
    } else {
        window.alert("Boa noite" + nomePessoa)
    }

    // }

    // saudacao(   )
    // saudacao()

    // function somar(num1, num2, num3){
    //     let soma = num1 + num2 + num3
    // }

    // let resultado = somar(5, 6, 9)

    // console.log("O resultado é:" + resultado);

    let professor = {
        nome: "Tadeu",
        sobrenome: "Nascimento",
        idade: 25
    }


    let produto = {
        nome: "Controle Remoto",
        marca: "Philco",
        modelo: "XRTFG-456",
        preco: 30.0

    }

}

