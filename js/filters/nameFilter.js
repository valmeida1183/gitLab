angular.module("listaTelefonica").filter("name", function(){ // formata o nome onde a primeira letra do nome e sobrenome seja maiúscula.
	return function(input){
		var listaDeNomes = input.split(" "); // quebra o nome de uma pessoa em um array.
		var listaDeNomesFormatada = listaDeNomes.map(function (nome){
			if(/(da|de)/.test(nome)){ // utiliza uma regex.test -> se for "da" ou "de" retorna true.
				return nome;
			}			
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();			
		});
		return listaDeNomesFormatada.join(" "); // transforma o array em uma string utilizando o separador " ".	
	};
});