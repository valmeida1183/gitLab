angular.module("listaTelefonica").factory("contatosAPI", function($http, config){ // contatosAPI é o nome dado para a factory.
	// os diferentes métodos da factory
	var _getContatos = function(){
		return	$http.get(config.baseUrl + "/contatos");
	};

	var _saveContato = function(contato){
		return $http.post(config.baseUrl + "/contatos", contato);
	}

	// o retorno da factory
	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
	
});

