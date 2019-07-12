//função que retira um item da lista
function retiraItem(){
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"; //display none
        }
    }
}

// Adiciona um "feito" no item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked'); //redireciona para o checked do css
  }
}, false);

// Cria um novo item
function newElement() {
  var li = document.createElement("li"); //cria um li
  var inputValue = document.getElementById("input").value; 
  var text = document.createTextNode(inputValue); 
  li.appendChild(text);
  if (inputValue === '') {
    alert("Escreve algo aí, queridu!");
  } else {
    document.getElementById("myUList").appendChild(li); 
  }
  document.getElementById("input").value = "";  

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);    
  li.appendChild(span);

  retiraItem();
  
}