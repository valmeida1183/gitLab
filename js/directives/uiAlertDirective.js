angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "view/alert.html",
		replace: true,
		restric: "AE", // A= atributo, E= elemento, C= class (css), M= comentário (<!-- -->)
		scope: {
			topic: "@title", // a propriedade topic está no escopo da diretiva que será mapeada com o valor do atributo "title" necessita do @ para entender que é um parâmetro, no alert.html existe o {{topic}} que mostrará o valor do escopo.
			error: "=message" // faz um vinculo entre a propriedade do escopo do template e uma propriedade do escopo da diretiva.
		},
		transclude: true 
	};
});