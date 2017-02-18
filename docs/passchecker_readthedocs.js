/* coding: utf-8 */

var helplist = [];

/*Доступные пароль*/
helplist.push("master");
helplist.push("arseny@softculture.cc");

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

    if (helplist.indexOf(getin.toLowerCase()) == -1) {
      var r = confirm("Пароль введен неверно или доступ к wiki был закрыт*.\nЧтобы попробовать еще раз, нажмите «ОК».\n\n*Для возобновления доступа к wiki пишите нам на почту:\nhello@softculture.cc\n\n");
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
