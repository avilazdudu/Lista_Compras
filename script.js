let count = 0;
let input = document.getElementById("input");
let main = document.getElementById("areaLista");

function task() {
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++count;

    let newItem = `
    <div id="${count}">
        <div id="${count}" class="item">${valorInput}</div>
        <button onclick="deletar(${count})" class="buttonDelete">X</button>
    </div>`;
    main.innerHTML += newItem;

    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();

}