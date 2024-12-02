let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

function addTarefa() {
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
if((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){

  ++contador;

let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
          <span id=span_"${contador}" class="material-symbols-outlined">
            radio_button_unchecked
          </span>
        </div>
        <div onclick="marcarTarefa(${contador})"  class="item-nome">
        ${valorInput}
        </div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete">
            <img src="img/delete.png" alt="" />Deletar
          </button>
        </div>
      </div>`;
      
      // ADICIONAR NOVO ITEM NO MAIN
      main.innerHTML += novoItem;

      // ZERAR OS CAMPINHOS
      input.value = "";
      input.focus();

      }
}

function deletar(id) {
  var tarefa = document.getElementById(id)
  tarefa.remove();
  
}


function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute('class')
  console.log(classe);

 if (classe == "item") {
    item.classList.add('clicado')

    var span = document.getElementById('span_'+id);
    span.classList.remove('material-symbols-outlined');
    span.classList.add('material');

}else{
      item.classList.remove('clicado')

    var span = document.getElementById('span_'+id);
    span.classList.remove('material');
    span.classList.add('material-symbols-outlined');

}
}

input.addEventListener("keyup", function (event) {
  // SE TECLOU ENTER(13)
  if(event.keyCode === 13) {
    event.preventDefault();
     btnAdd.click();
  }
})
