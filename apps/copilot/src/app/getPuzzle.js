export const getPuzzle = (difficulty) => {
  var table;
  var gameId = 0;
  var puzzle = [];
  var solution = [];
  var remaining = [9, 9, 9, 9, 9, 9, 9, 9, 9];
  var isSolved = false;
  var canSolved = true;
  var timer = 0;
  var pauseTimer = false;
  var intervalId;
  var gameOn = false;

  function newGame(difficulty) {
    var grid = getGridInit();
    var rows = grid;
    var cols = getColumns(grid);
    var blks = getBlocks(grid);
    var psNum = generatePossibleNumber(rows, cols, blks);
    solution = solveGrid(psNum, rows, true);
    timer = 0;
    for (var i in remaining) remaining[i] = 9;
    puzzle = makeItPuzzle(solution, difficulty);
    gameOn = difficulty < 5 && difficulty >= 0;
  }

  function getGridInit() {
    var rand = [];
    for (var i = 1; i <= 9; i++) {
      var row = Math.floor(Math.random() * 9);
      var col = Math.floor(Math.random() * 9);
      var accept = true;
      for (var j = 0; j < rand.length; j++) {
        if ((rand[j][0] == i) | ((rand[j][1] == row) & (rand[j][2] == col))) {
          accept = false;

          i--;
          break;
        }
      }
      if (accept) {
        rand.push([i, row, col]);
      }
    }

    var result = [];
    for (var i = 0; i < 9; i++) {
      var row = '000000000';
      result.push(row);
    }

    for (var i = 0; i < rand.length; i++) {
      result[rand[i][1]] = replaceCharAt(result[rand[i][1]], rand[i][2], rand[i][0]);
    }

    return result;
  }

  function getColumns(grid) {
    var result = ['', '', '', '', '', '', '', '', ''];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) result[j] += grid[i][j];
    }
    return result;
  }

  function getBlocks(grid) {
    var result = ['', '', '', '', '', '', '', '', ''];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) result[Math.floor(i / 3) * 3 + Math.floor(j / 3)] += grid[i][j];
    }
    return result;
  }

  function replaceCharAt(string, index, char) {
    if (index > string.length - 1) return string;
    return string.substr(0, index) + char + string.substr(index + 1);
  }

  function generatePossibleNumber(rows, columns, blocks) {
    var psb = [];

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
    var result = nextStep(0, possibleNumber, rows, solution, startFromZero);
    if (result == 1) return solution;
  }

  function nextStep(level, possibleNumber, rows, solution, startFromZero) {
    // get possible number fit in each cell in this row
    var x = possibleNumber.slice(level * 9, (level + 1) * 9);

    var y = generatePossibleRows(x);
    if (y.length == 0) return 0;

    var start = startFromZero ? 0 : y.length - 1;
    var stop = startFromZero ? y.length - 1 : 0;
    var step = startFromZero ? 1 : -1;
    var condition = startFromZero ? start <= stop : start >= stop;

    for (var num = start; condition; num += step) {
      var condition = startFromZero ? num + step <= stop : num + step >= stop;
      for (var i = level + 1; i < 9; i++) solution[i] = rows[i];
      solution[level] = y[num];
      if (level < 8) {
        var cols = getColumns(solution);
        var blocks = getBlocks(solution);

        var poss = generatePossibleNumber(solution, cols, blocks);
        if (nextStep(level + 1, poss, rows, solution, startFromZero) == 1) return 1;
      }
      if (level == 8) return 1;
    }
    return -1;
  }

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

  function makeItPuzzle(grid, difficulty) {
    if (!(difficulty < 5 && difficulty > -1)) difficulty = 13;
    var remainedValues = 81;
    var puzzle = grid.slice(0);

    function clearValue(grid, x, y, remainedValues) {
      function getSymmetry(x, y) {
        var symX = 8 - x; 
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
