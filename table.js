// var currentRow = 0;
// var currentCol = 0;
// function createTable() {
//     rn = window.prompt("Input number of rows");
//     cn = window.prompt("Input number of columns");
//     var table = document.getElementById('myTable');
//     for (var r = 0; r < parseInt(rn, 10); r++) {
//     var row = table.insertRow(r);
//     for (var c = 0; c < parseInt(cn, 10); c++) {
//     var cell = row.insertCell(c);
//     cell.innerHTML = "";
//     }
// }
//             placeIcon(0, 0,'dore.png');
//         }

//         function placeIcon(row, col,imageUrl) {
//             var previousCell = document.querySelector('.icon');
//             if (previousCell) {
//                 previousCell.classList.remove('icon');
//                 previousCell.innerHTML = "";
//             }

//             var table = document.getElementById('myTable');
//             var cell = table.rows[row].cells[col];
//             var img = document.createElement('img');
//             img.src = imageUrl; 
//             img.style.width = '200px';
//             img.style.height = '180px';
//             img.style.position = 'relative'; 
//             img.style.top = '-80px';
//             img.style.left = '-50px'; 
//             var iconDiv = document.createElement('div');
//             iconDiv.classList.add('icon');
//             iconDiv.appendChild(img);
//             cell.appendChild(iconDiv);
//             currentRow = row;
//             currentCol = col;
//         }

//         function moveIcon(direction) {
//             var newRow = currentRow;
//             var newCol = currentCol;

//             switch (direction) {
//                 case 'left':
//                     newCol = currentCol==0? alert('No more moves') : currentCol -1;
//                     break;
//                 case 'right':
//                     newCol = (currentCol==(parseInt(rn, 10) - 1))? alert('No more moves'): currentCol + 1;
//                     break;
//                 case 'up':
//                     newRow = currentRow == 0? alert('No more moves'): currentRow - 1;
//                     break;
//                 case 'down':
//                     newRow = (currentRow==(parseInt(cn, 10) - 1))? alert('No more moves'): currentRow + 1;
//                     break;
//                 default:
//                     break;
//             }

//             placeIcon(newRow, newCol,'dore.png');
//         }








var currentRow = 0;
var currentCol = 0;
var rn, cn;

function createTable() {
  rn = window.prompt("Input number of rows");
  cn = window.prompt("Input number of columns");
  if (!rn || !cn) return;

  rn = parseInt(rn, 10);
  cn = parseInt(cn, 10);

  var table = document.getElementById('myTable');
  table.innerHTML = ""; // reset old table

  for (var r = 0; r < rn; r++) {
    var row = table.insertRow(r);
    for (var c = 0; c < cn; c++) {
      row.insertCell(c).innerHTML = "";
    }
  }

  placeIcon(0, 0, 'dore.png');

  // Get table position & size
  const rect = table.getBoundingClientRect();

  // Move Create Button above the table
  const createBtn = document.getElementById("createBtn");
  createBtn.style.top = (window.scrollY + rect.top - 50) + "px";
  createBtn.style.left = (window.scrollX + rect.left + rect.width / 2 - createBtn.offsetWidth / 2) + "px";

  // Show and position controls below the table
  const controls = document.getElementById("controls");
  controls.style.display = "block";
  controls.style.top = (window.scrollY + rect.bottom + 20) + "px";
  controls.style.left = (window.scrollX + rect.left + rect.width / 2 - controls.offsetWidth / 2) + "px";
}

function placeIcon(row, col, imageUrl) {
  // Remove previous icon
  var previousCell = document.querySelector('.icon');
  if (previousCell) {
    previousCell.remove(); // completely remove instead of clearing innerHTML
  }

  var table = document.getElementById('myTable');
  var cell = table.rows[row].cells[col];

  // Create container for icon
  var iconDiv = document.createElement('div');
  iconDiv.classList.add('icon');

  var img = document.createElement('img');
  img.src = imageUrl;

  iconDiv.appendChild(img);
  cell.appendChild(iconDiv);

  currentRow = row;
  currentCol = col;
}


function moveIcon(direction) {
  var newRow = currentRow;
  var newCol = currentCol;

  switch (direction) {
    case 'left':
      if (currentCol == 0) return alert('No more moves');
      newCol--;
      break;
    case 'right':
      if (currentCol == cn - 1) return alert('No more moves');
      newCol++;
      break;
    case 'up':
      if (currentRow == 0) return alert('No more moves');
      newRow--;
      break;
    case 'down':
      if (currentRow == rn - 1) return alert('No more moves');
      newRow++;
      break;
  }

  placeIcon(newRow, newCol, 'dore.png');
}
