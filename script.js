const tomte = document.querySelector("#tomte");
const ren1 = document.querySelector(".ren");

// console.log(tomteCoords);
// console.log(ren1Coords);
// logik! ligger tomten inuti en div?
// tvådimensionell array

const printGameBoard = () => {
  let arr = [];
  let gameBoard = document.createElement("div");

  for (let i = 0; i < 8; i++) {
    arr[i] = [];
    let container = document.createElement("div");
    gameBoard.appendChild(container);
    for (let j = 0; j < 8; j++) {
      let div = document.createElement("div");
      div.classList.add("boardBox");
      //   div.setAttribute("id");
      div.setAttribute("value", `${i}` + `${j}`);
      container.appendChild(div);
      arr[i][j] = div;
    }
  }
  document.body.appendChild(gameBoard);
  return arr;
};

const gameBoard = printGameBoard();

// gameBoard.forEach((square) => {
//   square.forEach((innerSquare, j) => {
//     let div = document.createElement("div");
//     div.classList.add("boardBox");
//     div.innerHTML = j;
//     document.body.appendChild(div);
//   });
// });
