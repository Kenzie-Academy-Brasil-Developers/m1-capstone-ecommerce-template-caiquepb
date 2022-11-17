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
        ul.appendChild(button)
        button.onclick = function(){

            qtdProdutosCarrinho++
            valorProdutrosCarrinho += objeto.value

            if(qtdProdutosCarrinho == 1){
                div.removeChild(txtCarrinhoVazio)
                div.removeChild(txtAdicionarItens)
            }

            let imgCarrinho = document.createElement('img')
            imgCarrinho.src = objeto.img
            imgCarrinho.alt = objeto.nameItem
            imgCarrinho.classList.add("imgCarrinho")
            listaProdutos.appendChild(imgCarrinho)

            let nameCarrinho = document.createElement('h3')
            nameCarrinho.innerText = objeto.nameItem
            nameCarrinho.classList.add("nameCarrinho")
            listaProdutos.appendChild(nameCarrinho)

            let valorCarrinho = document.createElement('p')
            valorCarrinho.classList.add("valorCarrinho")
            valorCarrinho.innerText = `R$ ${objeto.value.toFixed(2)}`
            listaProdutos.appendChild(valorCarrinho)

            let removerProduto = document.createElement('button')
            removerProduto.innerText = "Remover Produto"
            removerProduto.classList.add("removerProduto")
            listaProdutos.appendChild(removerProduto)
            removerProduto.onclick = function(){

                qtdProdutosCarrinho--
                valorProdutrosCarrinho -= objeto.value

                listaProdutos.removeChild(imgCarrinho)
                listaProdutos.removeChild(nameCarrinho)
                listaProdutos.removeChild(valorCarrinho)
                listaProdutos.removeChild(removerProduto)

                if(qtdProdutosCarrinho == 0){

                    let divTotal = document.querySelector(".carrinhoStats")
                    let outro = document.querySelector('.outros')

                    outro.removeChild(divTotal)

                    div.appendChild(txtCarrinhoVazio)
                    div.appendChild(txtAdicionarItens)
                }
                else if(qtdProdutosCarrinho >= 1){
                    let qtdProdutos = document.querySelector(".qtdProdutos")
                    qtdProdutos.innerText = `Quantidade: ${qtdProdutosCarrinho}`
                    let valorProdutos = document.querySelector(".valorProdutos")
                    valorProdutos.innerText = `Total: R$ ${valorProdutrosCarrinho.toFixed(2)}`
                }

            }

            if(qtdProdutosCarrinho == 1){

                let outro = document.querySelector('.outros')

                let divTotal = document.createElement('section')
                divTotal.classList.add("carrinhoStats")
                outro.appendChild(divTotal)

                let qtdProdutos = document.createElement('p')
                qtdProdutos.classList.add("qtdProdutos")
                qtdProdutos.innerText = `Quantidade: ${qtdProdutosCarrinho}`
                divTotal.appendChild(qtdProdutos)
    
                let valorProdutos = document.createElement('p')
                valorProdutos.classList.add("valorProdutos")
                valorProdutos.innerText = `Total: R$ ${valorProdutrosCarrinho.toFixed(2)}`
                divTotal.appendChild(valorProdutos)

            }else if(qtdProdutosCarrinho > 1){
                let qtdProdutos = document.querySelector(".qtdProdutos")
                qtdProdutos.innerText = `Quantidade: ${qtdProdutosCarrinho}`
                let valorProdutos = document.querySelector(".valorProdutos")
                valorProdutos.innerText = `Total: R$ ${valorProdutrosCarrinho.toFixed(2)}`
            }
        
        }

    }

}

itensLoja(data)

let carrinho = document.querySelector('.carrinhoCompra')

let div = document.createElement('div')
div.classList.add("corpoCarrinhoCompra")
carrinho.appendChild(div)

let listaProdutos = document.createElement("ul")
div.appendChild(listaProdutos)

let txtCarrinhoVazio = document.createElement('p')
txtCarrinhoVazio.innerText = "Carrinho vazio"
txtCarrinhoVazio.classList.add("carrinhoVazio")
div.appendChild(txtCarrinhoVazio)

let txtAdicionarItens = document.createElement('p')
txtAdicionarItens.innerText = "Adicionar itens"
txtAdicionarItens.classList.add("adicionarItens")
div.appendChild(txtAdicionarItens)

let qtdProdutosCarrinho = 0
let valorProdutrosCarrinho = 0