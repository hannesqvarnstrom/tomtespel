const tomte = document.querySelector("#tomte");
const ren1 = document.querySelector(".ren");
// const gameBoard = document.querySelector("#gameBoard");
// console.log(tomteCoords);
// console.log(ren1Coords);
// logik! ligger tomten inuti en div?
// tvådimensionell array

let correctCounter = 0;
let guessesLeft = 20;

const printGameBoard = () => {
  let arr = [];
  let gameBoard = document.createElement("div");
  gameBoard.setAttribute("id", "gameBoard");
  for (let i = 0; i < 8; i++) {
    arr[i] = [];
    let container = document.createElement("div");
    container.classList.add("row");
    gameBoard.appendChild(container);
    for (let j = 0; j < 8; j++) {
      let div = document.createElement("button");
      div.classList.add("boardBox");
      //   div.setAttribute("id");
      div.setAttribute("id", `${i}` + `${j}`);
      container.appendChild(div);
      arr[i][j] = div;
    }
  }
  document.body.appendChild(gameBoard);
  return arr;
};
//-----------------

let santaPos = ""; //value of box where santa is
const tomteString = `<div id="tomte"></div>`;
const moveSanta = (target) => {
  target.innerHTML = tomteString;
  gameBoard.forEach((arr) =>
    arr.forEach((position) => {
      if (position.id == santaPos) {
        position.innerHTML = "";
        // position.disabled = true;
      }
    })
  );
  // find boardBox with id of id
  // delete santa from where he is
  // create santa in boardBox
  santaPos = target.id;
};

const gameBoard = printGameBoard();

const showLastPos = (pos) => {
  gameBoard.forEach((arr) =>
    arr.forEach((position) => {
      if (position.id == pos) {
        console.log(position);
        position.classList.add("guessed");
      }
    })
  );
};
const rngString = () => {
  let part1 = Math.floor(Math.random() * 8).toString();
  let part2 = Math.floor(Math.random() * 8).toString();
  return part1 + part2;
};
const insertReindeer = () => {
  let reindeers = [];
  for (let i = 0; i < 10; i++) {
    reindeers[i] = rngString();
  }
  return reindeers;
};
let reindeer = insertReindeer();
const reindeerCheck = (id) => {
  let isCorrect = false;
  reindeer.forEach((pos, i) => {
    if (pos == id) {
      isCorrect = true;
      reindeer.splice(i, 1);
    }
  });
  return isCorrect;
};
gameBoard.forEach((arr) =>
  arr.forEach((boardBox) => {
    boardBox.addEventListener("click", (e) => {
      showLastPos(santaPos);
      moveSanta(e.target);
      e.target.disabled = true;
      const guess = reindeerCheck(e.target.id);
      console.log(guess);
      //senare
      if (guess) {
        correctCounter++;
      } else {
        guessesLeft--;
      }
      if (guessesLeft == 0) {
        gameOver();
      } else if (correctCounter == 10) {
        gameWon();
      }
      // alert(e.target.id);
    });
  })
);

const gameOver = () => {
  alert("Game over!");
};
const gameWon = () => {
  alert("Game won!");
};
const removeReindeer = (id) => {};
// gameBoard.forEach((square) => {
//   square.forEach((innerSquare, j) => {
//     let div = document.createElement("div");
//     div.classList.add("boardBox");
//     div.innerHTML = j;
//     document.body.appendChild(div);
//   });
// });
// ---------------------------
