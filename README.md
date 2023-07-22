<div align="center">
  
# Alura Challenge Front-end 7 edição
  
</div>

| :placard: Vitrine.Dev |  [Minha Vitrine Dev](https://cursos.alura.com.br/vitrinedev/matheusporezeli)   |
| -------------  | --- |
| :sparkles: Nome        | **Meteora**
| :label: Tecnologias |   <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
| :rocket: URL         | [Projeto](https://meteora-seven.vercel.app)
| :fire: Desafio     | [Conheça o Challenge Alura](https://www.alura.com.br/challenges/front-end-6?host=https://cursos.alura.com.br)


## 👨‍🏫Descrição do projeto
Meteora é uma empresa do comércio eletrônico de roupas atemporais, casuais e sem gênero. Ela acredita que a moda é muito mais do que apenas tendências passageiras e oferece peças versáteis que se adaptam a qualquer estilo e ocasião.

A empresa tem por objetivo se tornar referência no mercado, atraindo mais clientes e impulsionando suas vendas, buscando alcançar um novo patamar e consolidando-se como uma empresa mais digital.

Para isso, eles solicitaram nossa ajuda como desenvolvedores para criar um site de um e-commerce, que proporcione uma experiência de compra incrível para seus clientes.

## 📝Requisitos
- Página inicial que contenha um buscador de produtos oferecidos pela empresa;✅
- Banner/carrossel que contenha informações sobre a coleção do momento;✅
- Galeria com as categorias dos produtos disponíveis na loja;✅
- Galeria com as informações dos produtos, como: imagem, nome do produto, descrição e link que leva até a página de “Saiba mais sobre o produto”.✅
- Uma modal que contenha a imagem, o nome, a descrição, o preço, as variações do produto e a opção de adicionar na sacola;✅
- Modal após cadastrar seu email;✅
- Seção para divulgar as facilidades que a loja proporciona para realizar as compras;✅
- Seção para cadastrar na newsletter e receber novidades;✅
- Rodapé com informação do site;✅
- 
### Extra:
- Funcionalidades para adicionar e remover itens à sacola (usando LocalStorage);🚧EM BREVE🚧
- Email cadastrado salvo no localStorage✅


# 📸Images
![layouts](https://github.com/matheusporezeli/Meteora/assets/112051389/a3cfecf8-8911-4418-a5b0-ea344bd10a57#vitrinidev)


## Desenvolvimento do projeto

Comecei estruturando o código html de cada sessão da página, buscando uma divisão por <code> sections </code> e criando a estrutura de cada parte do  site. <br>
Depois nomeei as classes e fiz a estilização da página no css buscando classes reutilizáveis a fim de melhorar o código e evitar classes repetidas. <br>
Inicialmente os produtos foram criados via html um a um, porém com o avançar do desenvolvimento fiz um arquivo json com a lista de produtos e utilizei javascript para criar esses produtos de forma dinâmica.<br>
O carousel do banner foi feito usando a biblioteca SwiperJS e adicionando os banners de acordo com o tamanho de tela.<br>
Para a criação dos modais de newsletter e de produtos tive que aprender como fazer isso no html5 e descobri a facilidade da tag <code>dialog</code> que já possibilita a criação de modais de forma mais prática, só tive que captar a ação de clique no botão e utilizando o atributo <code>.showModal</code> consegui fazer o efeito do modal aparecer e sumir utilizando javascript.<br>
Juntamente com isso fiz com que o email cadastrado ficasse salvo no localStorage para uso futuro.<br>
Por fim fiz o menu hamburguer e a responsividade da página.<br>

## Desafios encontrados

A parte mais complicada foi a criação do modal e fazer com que ele funcionasse, porém com uma ajuda de outras pessoas do discord da Alura e um pouco de pesquisa na documentação consegui entender que tag usar e como criar o JS para tal.
