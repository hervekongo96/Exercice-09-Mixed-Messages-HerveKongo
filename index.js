// declaration the tableau

const messageOne = ['Mbote !', 'Bonjour !', 'Biche !', 'Jambo !'];
const messageTwo = ['To lingi yo te', "Tu n'es pas la bienvenue", 'Toka Apa', 'Kiangekebeni'];


//using the fonctinality
const afficheOne = messageOne[Math.floor(Math.random() * messageOne.length)];
const afficheTwo = messageTwo[Math.floor(Math.random() * messageTwo.length)];


// global message
const message = `${afficheOne}, ${afficheTwo}`;


// affichage
console.log(message);