import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAx4T939TN21bEChU3d0ObbeJqaV-QSXKo",
  authDomain: "wildwesttwoplayers-8680d.firebaseapp.com",
  databaseURL: "https://wildwesttwoplayers-8680d-default-rtdb.firebaseio.com",
  projectId: "wildwesttwoplayers-8680d",
  storageBucket: "wildwesttwoplayers-8680d.firebasestorage.app",
  messagingSenderId: "767501026390",
  appId: "1:767501026390:web:fd06425e5920a31d86a7f7",
  measurementId: "G-447S4KV617",
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

let password = "unconfirmed";

const baseDeck = [
  { name: "Beggar", value: 0, count: 15 },
  { name: "Serf", value: 1, count: 13 },
  { name: "Farmer", value: 2, count: 10 },
  { name: "Lady", value: 3, count: 6 },
  { name: "Entrepreneur", value: 4, count: 5 },
  { name: "Banker", value: 5, count: 3 },
  { name: "Lord", value: 6, count: 4 },
  { name: "Priest", value: 7, count: 3 },
  { name: "Noble", value: 8, count: 2 },
  { name: "Chancellor", value: 10, count: 1 },
  { name: "Thief", value: 20, count: 1 },
  { name: "Thief", value: 10, count: 1 },
  { name: "Thief", value: 5, count: 1 },
  { name: "Thief", value: 3, count: 1 },
  { name: "Thief", value: 1, count: 1 },
  { name: "Harlet", value: 0, count: 3 },
  { name: "Serpent", value: 0, count: 1 },
];

let deck = [];
baseDeck.forEach(card => {
    for (let i = 0; i < card.count; i++){
        deck.push({...card});
    }
});

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap
  }
  return deck;
}

deck = shuffle(deck);
deck = shuffle(deck);

await set(ref(db,"deck"), deck);
window.onload(enterPassword())

function enterPassword(){
    password = prompt("what is password");
    if (password === "StarterFluidForLife"){
        GetMain.style.display = "inline-block";
    }
}

const drawInitialButton = document.getElementById("drawBtn");

drawInitialButton.addEventListener("click", async () => {
  // <-- add async here
  let index = Math.floor(Math.random() * deck.length);
  let card1 = deck.splice(index, 1);
  window.alert("You drew the " + card1.name + "with a value of " + card1.value);
  let card2 = deck.splice(index, 1);
  window.alert("You drew the " + card2.name + "with a value of " + card2.value);
  let card3 = deck.splice(index, 1);
  window.alert("You drew the " + card3.name + "with a value of " + card3.value);
  await set(ref(db, "deck"), deck); // ✅ OK now
  console.log("Deck updated");
});

const drawButton = document.getElementById("drawBtn");

drawButton.addEventListener("click", async () => {
  // <-- add async here
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1);
  window.alert("You drew the " + card.name + "with a value of " + card.value);
  await set(ref(db, "deck"), deck); // ✅ OK now
  console.log("Deck updated");
});



