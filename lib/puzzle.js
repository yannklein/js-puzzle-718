// ///////////////////////
// Rehearsal
// ///////////////////////

// 1. Select 2 elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a click on the button
button.addEventListener("click", () => {
  // 3. Display the hint (add a class active to it)
  hint.classList.add("active");
});

// ///////////////////////
// Puzzle challenge
// ///////////////////////
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

const checkIfPlayerWins = () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => Number.parseInt(e.innerHTML, 10));
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!");
  }
};

// 1. Select all the tiles (NodeList ~= array)
const tiles = document.querySelectorAll("td");
// 2. For each tile,
tiles.forEach((tile) => {
  // 3. Listen to a click on tile
  tile.addEventListener("click", (event) => {
    // 4. If tile is movable,
    if (canMove(tile)) {
      // 5. Swap tile with empty
      // do something with the number
      const emptyTile = document.querySelector(".empty");
      emptyTile.innerText = tile.innerText;
      emptyTile.classList.remove("empty");
      tile.innerText = '';
      tile.classList.add("empty");
      // 6. Check if its a win or not
      checkIfPlayerWins();
    }
  });
});

