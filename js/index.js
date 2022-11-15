function itensLoja(lista){

    for(let i = 0; i < lista.length; i++){

        let objeto = lista[i]

        let cards = document.querySelector('.cards')

        let ul = document.createElement('ul')
        ul.classList.add("cardStats")
        cards.appendChild(ul)

        let img = document.createElement('img')
        img.src = objeto.img
        img.alt = objeto.nameItem
        img.classList.add("cardImg")
        ul.appendChild(img)

        let tag = document.createElement('p')
        tag.innerText = objeto.tag
        tag.classList.add("cardTag")
        ul.appendChild(tag)

        let h3 = document.createElement('h3')
        h3.innerText = objeto.nameItem
        h3.classList.add("cardName")
        ul.appendChild(h3)

        let p1 = document.createElement('p')
        p1.innerText = objeto.description
        p1.classList.add("cardDescription")
        ul.appendChild(p1)

        let p2 = document.createElement('p')
        p2.innerText = `R$ ${objeto.value.toFixed(2)}`
        p2.classList.add("cardValue")
        ul.appendChild(p2)

        let button = document.createElement('button')
        button.innerText = "Adicionar ao carrinho"
        button.classList.add("buttonCarrinho")
        button.setAttribute("id", objeto.nameItem) 
        ul.appendChild(button)

    }

}

itensLoja(data)

let carrinho = document.querySelector('.carrinhoCompra')

let titulo = document.createElement('h4')
titulo.innerText = "Carrinho de compras"
titulo.classList.add("tituloCarrinhoCompra")
carrinho.appendChild(titulo)

let div = document.createElement('div')
div.classList.add("corpoCarrinhoCompra")
carrinho.appendChild(div)

let p1 = document.createElement('p')
p1.innerText = "Carrinho vazio"
p1.classList.add("carrinhoVazio")
div.appendChild(p1)

let p2 = document.createElement('p')
p2.innerText = "Adicionar itens"
p2.classList.add("adicionarItens")
div.appendChild(p2)