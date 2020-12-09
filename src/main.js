/* eslint-disable */
import "bootstrap";
import "./style.css";

function myFunction() {
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suits = ["&#9829;", "&#9830;", "&#9827;", "&#9824;"];

  let rank = ranks[Math.floor(Math.random() * Math.floor(12))];
  let suit = suits[Math.floor(Math.random() * Math.floor(3))];

  let color = suit === "&#9829;" || "&#9830;" ? "Red" : "Black";

  document.getElementById("cRank").innerHTML = rank;
  document.getElementById("cSuit").innerHTML = suit;

  document.getElementById("bRank").innerHTML = rank;
  document.getElementById("bSuit").innerHTML = suit;

  switch (rank) {
    case "A":
      // code block
      document.getElementById("5").innerHTML = suit;
      break;

    case 2:
      // code block
      document.getElementById("5").innerHTML = suit;
      document.getElementById("6").innerHTML = suit;
      break;

    case 3:
      // code block
      document.getElementById("3").innerHTML = suit;
      document.getElementById("5").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      break;

    case 4:
      // code block
      document.getElementById("1").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      break;

    case 5:
      // code block
      document.getElementById("1").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      document.getElementById("5").innerHTML = suit;
      break;

    case 6:
      // code block
      document.getElementById("1").innerHTML = suit;
      document.getElementById("2").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("8").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      break;

    case 7:
      // code block
      document.getElementById("5").innerHTML = suit;
      document.getElementById("1").innerHTML = suit;
      document.getElementById("2").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("8").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      break;

    case 8:
      // code block
      document.getElementById("4").innerHTML = suit;
      document.getElementById("1").innerHTML = suit;
      document.getElementById("2").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("8").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      document.getElementById("6").innerHTML = suit;
      break;

    case 9:
      // code block
      document.getElementById("4").innerHTML = suit;
      document.getElementById("1").innerHTML = suit;
      document.getElementById("2").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("8").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      document.getElementById("6").innerHTML = suit;
      document.getElementById("10").innerHTML = suit;
      break;

    case 10:
      // code block
      document.getElementById("1").innerHTML = suit;
      document.getElementById("2").innerHTML = suit;
      document.getElementById("3").innerHTML = suit;
      document.getElementById("4").innerHTML = suit;
      document.getElementById("5").innerHTML = suit;
      document.getElementById("6").innerHTML = suit;
      document.getElementById("7").innerHTML = suit;
      document.getElementById("8").innerHTML = suit;
      document.getElementById("9").innerHTML = suit;
      document.getElementById("10").innerHTML = suit;
      break;

    case "J":
      // code block
      document.getElementById("1").innerHTML = suit;
      break;

    case "Q":
      // code block
      document.getElementById("1").innerHTML = suit;
      break;

    case "K":
      // code block
      document.getElementById("1").innerHTML = suit;
      break;

    default:
    // code block
  }
}
window.onload = myFunction();
