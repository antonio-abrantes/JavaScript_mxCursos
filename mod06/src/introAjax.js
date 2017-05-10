/**
 * Created by Antonio on 08/05/2017.
 */

/** Trabalhando com Ajax **/

window.onload = function() {
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4 && ajax.status === 200){
            document.getElementById("retorno").innerHTML = ajax.responseText;
        }
    };

    ajax.open("GET", "src/informacoes.txt", true);

    ajax.send();

};