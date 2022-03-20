function adicionarFilme() {
    var campoFilme = document.getElementById("filme").value;
    if (campoFilme.endsWith(".jpg" || ".png")) {
      listarFilmesNaTela(campoFilme);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function removerFilme() {
    var elementoExclui = "<img src=" + "" + ">";
    var listaExclui = document.getElementById("listaFilmes");
    listaExclui.innerHTML = elementoExclui;
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(campoFilme) {
    var elementoFilme = "<img src=" + campoFilme + ">";
    var listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  }