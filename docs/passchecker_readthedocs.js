/* coding: utf-8 */

var helplist = [];

/*Доступные пароль*/
helplist.push("w14february"); /*Арсений*/
/*helplist.push("9771002aurov"); /*Витя*/*/
helplist.push("2508475"); /*Вася*/
/*helplist.push("Y7da2"); /*Настя*/*/
/*helplist.push("kirberezhnov@gmail.com"); /*Кирилл*/*/
helplist.push("gogen2709"); /*Руслан*/
helplist.push("0112358"); /*Сергей*/
helplist.push("kbstrelka"); /*Саша*/
helplist.push("hetmetro"); /*Саша*/
helplist.push("milanmilan"); /*Милан*/

/*Проверка HTML5 Storage*/
if (typeof(Storage) !== "undefined") {

  /*Проверка sessionStorage*/
  if (sessionStorage.login) {
    var login = sessionStorage.login;
  } else {
    var login = 0;
  }
  
} else {
  var login = 0;
  var r = confirm("У вас очень старая версия браузера! Советуем обновиться");
}

/* Всплывающее окно */
if (login != 1) {
  var getin = prompt("Введите пароль", "");
  if (getin == null) {

    location.href = 'http://www.softculture.cc';

  } else {

    if (helplist.indexOf(getin) == -1) {
      var r = confirm("Пароль введен неверно или доступ к wiki был закрыт.\nЧтобы попробовать еще раз, нажмите «ОК».\n\nДля получения пароля или возобновления доступа свяжитесь с администратором\n\n");
      if (r == true) {
        location.reload();
      } else {
        location.href = 'http://www.softculture.cc';
      }
    } else {
      /*Успешный вход*/
      sessionStorage.login = 1;
    }

  }
}
