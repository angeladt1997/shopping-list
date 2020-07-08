 $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
 	$(this).closest('li').remove();
 	 console.log('item deleted')
 }); 	 
  

 

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
	$(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
//"shopping-item shopping-item__checked"
});



//$('.shopping-item-toggle' ).on('click', '.button-label', function( event ) {
  //event.preventDefault();
  //$( "<li>" )
    //.append( "<default>");
//});


$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault(); 
	const item = $(event.currentTarget).find("#shopping-list-entry");
	if (item.val()) {
		$(`.shopping-list`).append(generatelistItem(item.val()));
		item.val("");
	}
	else { alert("The store ain't got that")};
})


function generatelistItem(li) {
	return `<li>
        <span class="shopping-item">${li}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
}
