(function(window){
	var bye={};
	var speak="GoodBye";
	bye.speak=function(name){
		console.log(speak + " " +name);
	}
	window.bye=bye;
}
)
(window);
