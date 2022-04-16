/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/

function greeting(message) {
  const letterMapping = {
    'a': '4',
    'e': '3',
    'o': '0',
    'i': '1',
    's': '5'
  }

const uppercaseLetters = (message, space) => {
  let uppercasedMessage = [];
  messageArray = message.split("")
  messageArray.forEach((letter, i) => {
    i % space == 0 ? 
      uppercasedMessage.push(letter.toUpperCase()) :
      uppercasedMessage.push(letter.toLowerCase())
  })
  return uppercasedMessage.join("")
}
  
  const keys = Object.keys(letterMapping)
  keys.forEach(key => {
    const eliotLettersRegEx = new RegExp(`[${key}]`, "gi")
    message = message.replace(eliotLettersRegEx, letterMapping[key])
  })
    message = uppercaseLetters(message, 2)
  return message;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');
