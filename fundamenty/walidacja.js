/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function validatePassword(password) {
  const specChar = ["!", "@", "#"]
  const digits = [...Array(10).keys()];
  
  let lengthCon = false
  let specialCon = false
  let numCon = false
  
  const passLength = password.length;
  
  if(passLength >= 3 && passLength <= 10){
    lengthCon = true
  }
  
  specChar.forEach(con => {
    if(password.includes(con)){
      specialCon = true
    }})

  digits.forEach(digit => {
    if(password.includes(digit)){
      numCon = true
    }})
  
  return lengthCon && specialCon && numCon
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);
