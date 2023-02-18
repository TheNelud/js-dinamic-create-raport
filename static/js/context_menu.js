feather.replace()

// скрываем контекстное меню
$("div.menu").hide();

// прикрепляем обработчик контекстного меню к элементу с классом "menu"
$(document).bind("contextmenu", function(event) {
		// отменяем действие браузера по умолчанию
    event.preventDefault();
    // показываем наше меню
    $("div.menu")
        .show()
        // привязываем координаты левого верхнего угла к координатам мыши
        .css({top: event.pageY + 15, left: event.pageX + 10});
});

// обработчик клика на странице
// если кликнуть мимо меню — оно исчезнет
$(document).click(function() {
	// смотрим, курсор сейчас находится на меню или нет
	// если на меню — он точно над каким-то элементом и этот элемент сейчас имеет псевдокласс hover
  isHovered = $("div.menu").is(":hover");
  // если курсор ни над одним элементом меню
  if (isHovered == false){
  	// скрываем меню
    $("div.menu").fadeOut("fast");
  }
});