/*
  Escrever uma função que parametrize uma string
  Exemplo entrada: “hoje é dia de aula remota”
  Exemplo saída: hoje-é-dia-de-aula-remota
*/
function ex3(text) {
  return text.split(" ").join("-");
}

/*
  Escreva uma função para truncar uma frase dado um determinado número de palavras
  Exemplo entrada: “hoje é meu dia preferido de aula remota”, 5
  Exemplo saída: “hoje é meu dia preferido”
*/
function ex4(text, number) {
  let truncate_array = text.split(" ");
  let new_array = [];
  for (i = 0; i < number; i++) {
    new_array.push(truncate_array[i]);
  }
  return new_array.join(" ");
}

/*
  Escreve uma função que tenha como entrada um número e insira um traço (“-“) entre dois números pares
  Exemplo entrada: 2876418
  Exemplo saída: 2-876-418
*/
function ex5(number) {
  let number_array = String(number).split("");
  let formated_number = "";
  for (i = 0; i < number_array.length; i++) {
    if (
      Number(number_array[i]) % 2 == 0 &&
      Number(number_array[i + 1]) % 2 == 0
    )
      formated_number += number_array[i] + "-";
    else formated_number += number_array[i];
  }
  return formated_number;
}

/*
  Escreva uma função que faça o merge de dois arrays e remova os elementos duplicados.
  Exemplo entrada: [8, 4, 5, 7], [3, 2, 1, 8]
  Exemplo saída: [8, 4, 5, 7, 3, 2, 1]
*/

function ex7(arr, arr2) {
  let aux = arr.concat(arr2);
  let new_arr = aux.filter(function (a, i) {
    return aux.indexOf(a) === i;
  });
  return new_arr;
}

module.exports = { ex3, ex4, ex5, ex7 };
