const cadastrarBtn = document.querySelector("#modalNewsletterbtn")
const emailIpt = document.querySelector("#emailIpt")

/**Função responsável por salvar os dados*/
cadastrarBtn.addEventListener("click", () => {
    let email = new Array()

     /**Verifica se a propriedade existe
      * Caso exista, converte de String para Object*/
    if (localStorage.hasOwnProperty("email")) {
        email = JSON.parse(localStorage.getItem("email"))
    }

    /* Adiciona um novo valor no array criado */
    email.push({"email": emailIpt.value})

    /* Salva o item */
    localStorage.setItem("email", JSON.stringify(email))
})