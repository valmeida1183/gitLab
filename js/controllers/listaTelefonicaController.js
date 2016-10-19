//Assim localiza um módulo e cria uma controller
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator){ // se tiver problemas de performance desconfie sempre dos filtros
	$scope.app = "Lista Telefonica";

	// definindo um array de objetos.
	$scope.contatos = [];				
	$scope.operadoras = [];

	var carregarContatos = function() {
		contatosAPI.getContatos().success(function (data){
			$scope.contatos = data;
		});	
	};

	var carregarOperadoras = function() {
		operadorasAPI.getOperadoras().success(function(data){
			$scope.operadoras = data;
		});	
	};

	$scope.adicionarContato = function(contato){
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato; // apaga a referência que não será utilizada.
			$scope.contatoForm.$setPristine();  // retorna o contatoForm ao estado pristine.
			carregarContatos();
		});				
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) { // retorna somente os não selecionados
				return	contato;
			}					
		});				
	};
	$scope.isContatosSelecionado = function (contatos) {
		return contatos.some(function (contato){ // se existir um registro selecionado no array retorna true.
			return	contato.selecionado;
		});				
	};
	$scope.ordernarPor = function (campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao; // a primeira vez o valor é undefinied que o angular transforma para false automaticamente.
	};

	carregarContatos();
	carregarOperadoras();			
});