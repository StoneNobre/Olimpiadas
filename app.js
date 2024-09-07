
function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value

  // se o campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte<L/p>"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    // se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descrição-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
  }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

  // Atribui o HTML gerado para o conteúdo da seção de resultados
  section.innerHTML = resultados;

}



