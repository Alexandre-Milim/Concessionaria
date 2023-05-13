let Produtos = {
  lista: [
    {
      nome: "Gtr ",
      descricao: "Potente e veloz",
      categoria: "Coleção do Milim",
      preço: "1000,99",
      img: "1.png",
    },
    {
      nome: "Purple style",
      descricao: "Roxão Lindo",
      categoria: "Coleção do Milim",
      preço: "34,99",
      img: "2.png",
    },
    {
      nome: "Azulão do Batman",
      descricao: "Brilhante igual o mar",
      categoria: "Coleção do Milim",
      preço: "15,99",
      img: "3.png",
    },
    {
      nome: "Carro do Bahiano",
      descricao: "confortavel, estilos0 e unico",
      categoria: "Coleção do Milim",
      preço: "87,49",
      img: "7.png",
    },
    {
      nome: "Milim ",
      descricao: "estilosão",
      categoria: "Coleção do Milim",
      preço: "34,99",
      img: "8.png",
    },
    {
      nome: "A luz do luar",
      descricao: "Romanticão",
      categoria: "Coleção do Milim",
      preço: "27,24",
      img: "6.png",
    },
  ],
  adicionar() {
    return "O item foi adicionado com sucesso"
  },
  modificar() {
    return "o item foi modificado com sucesso"
  },
  remover() {
    return "o item foi removido com sucesso"
  },
}

let formModifificar = document.getElementById("modificar")
let span = document.querySelector("#span")

function pesquisar() {
  var span = document.getElementById("span");
  var html = "";

  Produtos.lista.forEach((item, index) => {
    html += "<div><table><ul>";
    html += "<li>Nome: " + item.nome + "</li>";
    html += "<li>Descrição: " + item.descricao + "</li>";
    html += "<li>Categoria: " + item.categoria + "</li>";
    html += "<li>Preço: R$" + item.preço + "</li>";
    html += "<img src='img/" + item.img + "'style='padding: 8px;' />";
    html += "</ul></table></div>";

    html += "<div>";    
    html += "<button onclick='modificar("+ index +")' class='bottone1' style='margin: 2px;   margin-left: 60px;'>Modificar</buttton>";
    html += "<button onclick='remover("+ index +")'' class='bottone1'>Remover</buttton>";
    html += "</div> <hr>"
    
  });

  span.innerHTML = html;
}

function adicionar() {
    var nome = document.getElementById("nome")
    var descrição = document.getElementById('descrição')
    var categoria = document.getElementById('categoria')
    var preço = document.getElementById('preço')
    var img = document.getElementById('img')

    var key = document.getElementById("key")

    var obj = {
        nome: nome.value,
        descricao: descrição.value,
        categoria: categoria.value,
        preço: preço.value,
        img: img.value,
    }

    Produtos.lista.push(obj)

    pesquisar()
    }

formModifificar.addEventListener("click", modificaProduto)

function modificaProduto() {
    var nome = document.getElementById("nome")
    var descrição = document.getElementById('descrição')
    var categoria = document.getElementById('categoria')
    var preço = document.getElementById('preço')
    var img = document.getElementById('img')

    var key = document.getElementById("key")

    var obj = {
        nome: nome.value,
        descricao: descrição.value,
        categoria: categoria.value,
        preço: preço.value,
        img: img.value,
    }


    Produtos.lista[key.value] = obj
    pesquisar()

}

function modificar(key) {
    var produto = Produtos.lista[key]

    var nome = document.getElementById("nome")
    nome.value = produto.nome

    var descrição = document.getElementById('descrição')
    descrição.value = produto.descricao

    var categoria = document.getElementById('categoria')
    categoria.value = produto.categoria

    var preço = document.getElementById('preço')
    preço.value = produto.preço

    var img = document.getElementById('img')
    img.value = produto.img

    var keyInput = document.getElementById("key")
    keyInput.value = key
}

function remover(key) {
    Produtos.lista.splice(key, 1)
    pesquisar()
}

span.addEventListener("load", pesquisar);