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
буде відбуватись гра створюємо з 
функцій з назвою onclick вони будуть
змінними, функції починаються з і=1 і 
рахуються 9 разів, тому в нас є 9 cell,
щоб не записувати cell кожен окремо
ми стоврили масив cell
*/
var cell = [];
for (var i = 1; i < 10; i++) {
  cell [i] = document.getElementById("canvas"+i);
}

/*
створюємо масив ctx-наповнення клітинок
(в кожній клітинці буде коло),
за допомогою методу getContextмалюємо в 
кожній клітинці коло
 */