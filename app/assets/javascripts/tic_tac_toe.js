$(function() {
  $('div.square').click(TTTAPP.playMove);
});

TTTAPP = {};
TTTAPP.player = "X";
TTTAPP.computer = "O";
TTTAPP.currentMove = {
  row: nil,
  column: nil,
  diagonal0: nil,
  diagonal1: nil
};

TTTAPP.rows = {
  0: {
    0: nil,
    1: nil,
    2: nil
  },
  1: {
    3: nil,
    4: nil,
    5: nil
  },
  2: {
    6: nil,
    7: nil,
    8: nil
  }
};

TTTAPP.columns = {
  0: {
    0: nil,
    3: nil,
    6: nil
  },
  1: {
    1: nil,
    4: nil,
    7: nil
  },
  2: {
    2: nil,
    5: nil,
    8: nil
  }
};

TTTAPP.diagonals = {
  0: {
    0: nil,
    4: nil,
    8: nil
  },
  1: {
    2: nil,
    5: nil,
    6: nil
  }
};

TTTAPP.playMove = function () {
  console.log(this);
  getSpaceInfo();
};

TTTAPP.getSpaceInfo = function (spaceNum) {
  TTTAPP.currentMove.row = Math.floor(spaceNum),
  TTTAPP.currentMove.column = spaceNum % 3,
  TTTAPP.currentMove.diagonal0 = ((spaceNum%2) === 0),
  TTTAPP.currentMove.diagonal1 = ((spaceNum%4) === 0);
};

TTTAPP.setSpace = function (spaceNum) {
  // Change DOM and remove click event
};

TTTAPP.isWinner = function () {
  // Return true or false
};

TTTAPP.resetBoard = function () {
  // Change DOM and re-add click events
};
