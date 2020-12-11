const tomte = document.querySelector("#tomte");
const ren1 = document.querySelector(".ren");
// const gameBoard = document.querySelector("#gameBoard");
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
      div.setAttribute("id", `${i}` + `${j}`);
      container.appendChild(div);
      arr[i][j] = div;
    }
  }
  //   document.body.appendChild(gameBoard);
  return arr;
};
//-----------------
let santaPos = ""; //value of box where santa is

const moveSanta = (id) => {
  // find boardBox with id of id
  // delete santa from where he is
  // create santa in boardBox
  santaPos = id;
};

const gameBoard = printGameBoard();

gameBoard.forEach((arr) =>
  arr.forEach((boardBox) => {
    boardBox.addEventListener("click", (e) => alert(e.target.id));
  })
);

// gameBoard.forEach((square) => {
//   square.forEach((innerSquare, j) => {
//     let div = document.createElement("div");
//     div.classList.add("boardBox");
//     div.innerHTML = j;
//     document.body.appendChild(div);
//   });
// });
