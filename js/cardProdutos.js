let listaProdutos = document.querySelector("#lista_produtos");

fetch("./produtos.json").then((response) => {
  response.json().then((element) => {
    element.produtos.map((produto) => {
      listaProdutos.innerHTML += `
                <li class="produtos_card">
                    <img src="${produto.imagem}" class="produtos__imagem">
                    <h2 class="produtos__titulo">${produto.titulo}</h2>
                    <p class="produtos__descricao">${produto.descricao}</p>
                    <h2 class="produtos__preco">${produto.preco}</h2>
                    <button class="verMaisBTN">Ver mais</button>
                </li>`;
    });
  });
});
