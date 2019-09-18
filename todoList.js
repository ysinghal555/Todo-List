//Check off Specific Todos By Clicking
$("ul").on("click" , "li" , function(){
	$(this).toggleClass("completed");	
});

//Click on X to delete Todo
$("ul").on("click" , "span" , function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grabbing new todo Text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" +  todoText + "</li>")
	}
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToogle();
})