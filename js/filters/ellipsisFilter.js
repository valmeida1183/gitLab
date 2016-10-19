angular.module("listaTelefonica").filter("ellipsis", function(){
	return	function (input, size){
		if(input.length <= size){
			return input;
		}
		var output = input.substring(0,(size || 2)) + "..."; // size for undefined o nagular o transformará para false, e cairá no "ou" setando para 2		
		return output;
	};
});