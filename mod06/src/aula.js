/**
 * Created by Antonio on 08/05/2017.
 */

//usar o objeto Pessoa

var pessoa = new Pessoa("Antônio", "Abrantes");

console.log(pessoa);

//pessoa.nome = "Antônio";
//pessoa.sobreNome = "Abrantes";

console.log(pessoa);
console.log(pessoa.nomeCompleto());

pessoa.setNome("Ana");
console.log(pessoa.getNome());