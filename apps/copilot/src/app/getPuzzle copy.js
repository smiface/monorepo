export const getPuzzle = (difficulty) => {
  // grid variable
  var table;

  // game number
  var gameId = 0;

  // puzzle grid
  var puzzle = [];

  // solution grid
  var solution = [];

  // remaining number counts
  var remaining = [9, 9, 9, 9, 9, 9, 9, 9, 9];

  // variable to check if "Sudoku Solver" solve the puzzle
  var isSolved = false;
  var canSolved = true;

  // stopwatch timer variables
  var timer = 0;
  var pauseTimer = false;
  var intervalId;
  var gameOn = false;

  function newGame(difficulty) {
    // get random position for numbers from '1' to '9' to generate a random puzzle
    var grid = getGridInit();

    // prepare rows, columns and blocks to solove the initioaled grid
    var rows = grid;
    var cols = getColumns(grid);
    var blks = getBlocks(grid);

    //          solve the grid section
    // generate allowed digits for each cell
    var psNum = generatePossibleNumber(rows, cols, blks);

    // solve the grid
    solution = solveGrid(psNum, rows, true);

    // reset the game state timer and remaining number
    timer = 0;
    for (var i in remaining) remaining[i] = 9;

    // empty cells from grid depend on difficulty
    // for now it will be:
    // 59 empty cells for very easy
    // 64 empty cells for easy
    // 69 empty cells for normal
    // 74 empty cells for hard
    // 79 empty cells for expert
    puzzle = makeItPuzzle(solution, difficulty);

    // game is on when the difficulty = [0, 4]
    gameOn = difficulty < 5 && difficulty >= 0;

    console.log(table);
  }

  function getGridInit() {
    var rand = [];
    // for each digits from 1 to 9 find a random row and column
    for (var i = 1; i <= 9; i++) {
      var row = Math.floor(Math.random() * 9);
      var col = Math.floor(Math.random() * 9);
      var accept = true;
      for (var j = 0; j < rand.length; j++) {
        // if number exist or there is a number already located in then ignore and try again
        if ((rand[j][0] == i) | ((rand[j][1] == row) & (rand[j][2] == col))) {
          accept = false;

          // try to get a new position for this number
          i--;
          break;
        }
      }
      if (accept) {
        rand.push([i, row, col]);
      }
    }

    // initialize new empty grid
    var result = [];
    for (var i = 0; i < 9; i++) {
      var row = '000000000';
      result.push(row);
    }

    // put numbers in the grid
    for (var i = 0; i < rand.length; i++) {
      result[rand[i][1]] = replaceCharAt(result[rand[i][1]], rand[i][2], rand[i][0]);
    }

    return result;
  }

  // return columns from a row grid
  function getColumns(grid) {
    var result = ['', '', '', '', '', '', '', '', ''];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) result[j] += grid[i][j];
      /*try {
            result[j] += grid[i][j];
        } catch (err) {
            alert(grid);
        }*/
    }
    return result;
  }

  // return blocks from a row grid
  function getBlocks(grid) {
    var result = ['', '', '', '', '', '', '', '', ''];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) result[Math.floor(i / 3) * 3 + Math.floor(j / 3)] += grid[i][j];
    }
    return result;
  }

  // function to replace char in string
  function replaceCharAt(string, index, char) {
    if (index > string.length - 1) return string;
    return string.substr(0, index) + char + string.substr(index + 1);
  }

  // get allowed numbers that can be placed in each cell
  function generatePossibleNumber(rows, columns, blocks) {
    var psb = [];

    // for each cell get numbers that are not viewed in a row, column or block
    // if the cell is not empty then, allowed number is the number already exist in it
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        psb[i * 9 + j] = '';
        if (rows[i][j] != 0) {
          psb[i * 9 + j] += rows[i][j];
        } else {
          for (var k = '1'; k <= '9'; k++) {
            if (!rows[i].includes(k))
              if (!columns[j].includes(k)) if (!blocks[Math.floor(i / 3) * 3 + Math.floor(j / 3)].includes(k)) psb[i * 9 + j] += k;
          }
        }
      }
    }
    return psb;
  }

  function solveGrid(possibleNumber, rows, startFromZero) {
    var solution = [];

    // solve Sudoku with a backtracking algorithm
    // Steps are:
    //  1.  get all allowed numbers that fit in each empty cell
    //  2.  generate all possible rows that fit in the first row depend on the allowed number list
    //` 3.  select one row from possible row list and put it in the first row
    //  4.  go to next row and find all possible number that fit in each cell
    //  5.  generate all possible row fit in this row then go to step 3 until reach the last row or there aren't any possible rows left
    //  6.  if next row hasn't any possible left then go the previous row and try the next possibility from possibility rows' list
    //  7.  if the last row has reached and a row fit in it has found then the grid has solved

    var result = nextStep(0, possibleNumber, rows, solution, startFromZero);
    if (result == 1) return solution;
  }

  // level is current row number in the grid
  function nextStep(level, possibleNumber, rows, solution, startFromZero) {
    // get possible number fit in each cell in this row
    var x = possibleNumber.slice(level * 9, (level + 1) * 9);

    // generate possible numbers sequence that fit in the current row
    var y = generatePossibleRows(x);
    if (y.length == 0) return 0;

    // to allow check is solution is unique
    var start = startFromZero ? 0 : y.length - 1;
    var stop = startFromZero ? y.length - 1 : 0;
    var step = startFromZero ? 1 : -1;
    var condition = startFromZero ? start <= stop : start >= stop;

    // try every numbers sequence in this list and go to next row
    for (var num = start; condition; num += step) {
      var condition = startFromZero ? num + step <= stop : num + step >= stop;
      for (var i = level + 1; i < 9; i++) solution[i] = rows[i];
      solution[level] = y[num];
      if (level < 8) {
        /*if (solution[4] === undefined) {
                var x = 0;
                x++;
            }*/
        var cols = getColumns(solution);
        var blocks = getBlocks(solution);

        var poss = generatePossibleNumber(solution, cols, blocks);
        if (nextStep(level + 1, poss, rows, solution, startFromZero) == 1) return 1;
      }
      if (level == 8) return 1;
    }
    return -1;
  }

  // generate possible numbers sequence that fit in the current row
  function generatePossibleRows(possibleNumber) {
    var result = [];

    function step(level, PossibleRow) {
      if (level == 9) {
        result.push(PossibleRow);
        return;
      }

      for (var i in possibleNumber[level]) {
        if (PossibleRow.includes(possibleNumber[level][i])) continue;
        step(level + 1, PossibleRow + possibleNumber[level][i]);
      }
    }

    step(0, '');

    return result;
  }

  // empty cell from grid depends on the difficulty to make the puzzle
  function makeItPuzzle(grid, difficulty) {
    /*
        difficulty:
        // expert   : 0;
        // hard     : 1;
        // Normal   : 2;
        // easy     : 3;
        // very easy: 4;
    */

    // empty_cell_count = 5 * difficulty + 20
    // when difficulty = 13, empty_cell_count = 85 > (81 total cells count)
    // so the puzzle is showen as solved grid
    if (!(difficulty < 5 && difficulty > -1)) difficulty = 13;
    var remainedValues = 81;
    var puzzle = grid.slice(0);

    // function to remove value from a cell and its symmetry then return remained values
    function clearValue(grid, x, y, remainedValues) {
      function getSymmetry(x, y) {
        var symX = 8 - x; //Symmetry
        var symY = 8 - y;
        return [symX, symY];
      }
      var sym = getSymmetry(x, y);
      if (grid[y][x] != 0) {
        grid[y] = replaceCharAt(grid[y], x, '0');
        remainedValues--;
        if (x != sym[0] && y != sym[1]) {
          grid[sym[1]] = replaceCharAt(grid[sym[1]], sym[0], '0');
          remainedValues--;
        }
      }
      return remainedValues;
    }

    // remove value from a cell and its symmetry to reach the expected empty cells amount
    while (remainedValues > difficulty * 5 + 20) {
      var x = Math.floor(Math.random() * 9);
      var y = Math.floor(Math.random() * 9);
      remainedValues = clearValue(puzzle, x, y, remainedValues);
    }
    return puzzle;
  }

  newGame(difficulty);
  let p = puzzle.map(el => el.split(''));
  return  p
};
