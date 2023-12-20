(function(window){
	var hello={};
	var speak="Hello";
	hello.speak=function(name){
		console.log(speak + " " +name);
	}
	window.hello=hello;
}
)
(window);
