/*
Виводимо ім"я з поля вводу на екран
гравець 1"
*/
function changeName1() {
	var x = document.getElementById("fname1");
	x.value = x.value.toUpperCase();
	var player1 = document.getElementById("player1");
	player1.style.fontSize='20px';
  player1.innerHTML = document.forms['player1form'].elements['id'].value;
}

/*
Виводимо ім"я з поля вводу на екран
гравець 2"
*/
function changeName2() {
  var x = document.getElementById("fname2");
  x.value = x.value.toUpperCase();
  var player2 = document.getElementById("player2");
  player2.style.fontSize='20px';
  player2.innerHTML = document.forms['player2form'].elements['id'].value;
}


/*створюємо масив з клітинок у яких
буде відбуватись гра
*/