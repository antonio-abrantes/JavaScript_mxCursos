/**
 * Created by Antonio on 09/05/2017.
 */

// http://api.postmon.com.br/v1/cep/*cep_a_consultar*
window.onload = function(){

    var ajax = new XMLHttpRequest();
    var frmBuscaCep = document.getElementById("frmBuscaCep");
    var inputCep = document.getElementById("imputCep");
    var divRetorno = document.getElementById("retorno");

    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4 && ajax.status === 200){
            console.log(ajax.responseText);

            var data = JSON.parse(ajax.responseText);

            divRetorno.innerHTML = "Logradouro: "+data.logradouro+"<br>Cidade: "+data.cidade+" - "+data.estado;

        }
    };

    frmBuscaCep.onsubmit = function(){
        if(inputCep.value === "" || inputCep.value.length !== 8){
            alert("Informe o CEP corretamente!");
            return false;
        }

        divRetorno.innerHTML = "Processando...";

        ajax.open("GET", "http://api.postmon.com.br/v1/cep/"+inputCep.value, true);
        ajax.send();

        return false;
    }

};