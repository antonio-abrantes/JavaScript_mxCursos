/**
 * Created by Antonio on 08/05/2017.
 */

function Pessoa(nome, sobreNome){
    this.nome = nome;
    this.sobreNome = sobreNome;

    this.nomeCompleto = function(){
        return this.nome+" "+this.sobreNome;
    }

    this.setNome = function(nome){
        this.nome = nome;
    };

    this.setSobreNome = function(sobreNome){
        this.sobreNome = sobreNome;
    };

    this.getNome = function(){
        return this.nome;
    }

    this.getSobreNome = function(){
        return this.sobreNome;
    }

};
