angular.module("listaTelefonica").service("operadorasAPI", function($http, config){ // service é tipo uma função construtora.
	this.getOperadoras = function() {
		return $http.get(config.baseUrl + "/operadoras");
	}
});