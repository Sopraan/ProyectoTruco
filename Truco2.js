const mazo = [
  { name: "1 Espada", order: 1, thumnail: "asdasd" },
  { name: "1 Basto", order: 2, thumnail: "asdasd" },
  { name: "7 Espada", order: 3, thumnail: "asdasd" },
  { name: "7 Oro", order: 4, thumnail: "asdasd" },
  { name: "3 de Espada", order: 5, thumnail: "asdasd" },
  { name: "3 de Basto", order: 5, thumnail: "asdasd" },
  { name: "3 de Copa", order: 5, thumnail: "asdasd" },
  { name: "3 de Oro", order: 5, thumnail: "asdasd" },
  { name: "2 de Copa", order: 6, thumnail: "asdasd" },
  { name: "2 de Espada", order: 6, thumnail: "asdasd" },
  { name: "2 de Basto", order: 6, thumnail: "asdasd" },
  { name: "2 de Copa", order: 6, thumnail: "asdasd" },
  { name: "1 de Copa", order: 7, thumnail: "asdasd" },
  { name: "1 de Oro", order: 7, thumnail: "asdasd" },
  { name: "12 de Espada", order: 8, thumnail: "asdasd" },
  { name: "12 de Basto", order: 8, thumnail: "asdasd" },
  { name: "12 de Copa", order: 8, thumnail: "asdasd" },
  { name: "12 de Oro", order: 8, thumnail: "asdasd" },
  { name: "11 de Espada", order: 9, thumnail: "asdasd" },
  { name: "11 de Basto", order: 9, thumnail: "asdasd" },
  { name: "11 de Copa", order: 9, thumnail: "asdasd" },
  { name: "11 de Oro", order: 9, thumnail: "asdasd" },
  { name: "10 de Espada", order: 10, thumnail: "asdasd" },
  { name: "10 de Basto", order: 10, thumnail: "asdasd" },
  { name: "10 de Copa", order: 10, thumnail: "asdasd" },
  { name: "10 de Oro", order: 10, thumnail: "asdasd" },
  { name: "7 de Copa", order: 11, thumnail: "asdasd" },
  { name: "7 de Basto", order: 11, thumnail: "asdasd" },
  { name: "6 de Espada", order: 12, thumnail: "asdasd" },
  { name: "6 de Basto", order: 12, thumnail: "asdasd" },
  { name: "6 de Copaa", order: 12, thumnail: "asdasd" },
  { name: "6 de Oro", order: 12, thumnail: "asdasd" },
  { name: "5 de Espada", order: 13, thumnail: "asdasd" },
  { name: "5 de Basto", order: 13, thumnail: "asdasd" },
  { name: "5 de Copaa", order: 13, thumnail: "asdasd" },
  { name: "5 de Oro", order: 13, thumnail: "asdasd" },
  { name: "4 de Espada", order: 14, thumnail: "asdasd" },
  { name: "4 de Basto", order: 14, thumnail: "asdasd" },
  { name: "4 de Copaa", order: 14, thumnail: "asdasd" },
  { name: "4 de Oro", order: 14, thumnail: "asdasd" },
];

const numero = 2;
const cantPlayers = numero;
const players = [];
const mesa = [];
const mano = [];

let mazoMezcla = mazo
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

function cantidadDeJugadores() {
  for (i = 0; i < numero; i++) {
    players.push([]);
  }
}

function repartir() {
  players.forEach((element) => {
    while (element.length < 3) {
      const cartaEliminada = mazoMezcla.pop();

      element.push(cartaEliminada);
    }
  });
}

function cartaAJugar() {
  const carta = prompt("carta 0,1,2");

  return carta;
}

function jugarCarta(element) {
  const carta = element.splice(cartaAJugar(), 1);

  mano.push(carta[0]);
}
function jugarMano() {
  players.forEach((element) => {
    jugarCarta(element);
  });
}

function manoGanada() {}

function envido() {}

function envidoGanado() {}

function truco() {}

function trucoGanado() {}

// function accion() {
//   envido();
//   truco();
// }

function juego() {
  cantidadDeJugadores();
  repartir();

  jugarMano();
  jugarMano();
  jugarMano();

  console.log(JSON.stringify(mesa, null, 2));
}

juego();
