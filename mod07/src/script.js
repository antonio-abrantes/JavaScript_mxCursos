/**
 * Created by Antonio on 09/05/2017.
 */

window.onload = function(){
    var links = document.getElementsByClassName("abrePagina");
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){

        console.log(ajax.status);
        console.log(ajax.readyState);

        if(ajax.readyState === 4 && ajax.status === 200){
            document.getElementById("retorno").innerHTML = ajax.responseText;
        }

    };

    ajax.onerror = function(){
        alert("Pagina não encontrada!");
    }

    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(evento){
            evento.preventDefault();
            ajax.open("GET", this.getAttribute("href"), true);
            ajax.send();
        };
    }
};