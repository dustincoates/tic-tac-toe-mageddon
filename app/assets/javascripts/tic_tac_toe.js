$(function() {
  $('div.square').click(TTTAPP.playPlayerMove);
});

TTTAPP = {};
TTTAPP.player = "X";
TTTAPP.computer = "O";
TTTAPP.currentMove = {
  row: null,
  column: null,
  diagonal0: null,
  diagonal1: null
};
TTTAPP.movesPlayed = 0;

TTTAPP.rows = {
  0: {
    0: null,
    1: null,
    2: null
  },
  1: {
    3: null,
    4: null,
    5: null
  },
  2: {
    6: null,
    7: null,
    8: null
  }
};

TTTAPP.columns = {
  0: {
    0: null,
    3: null,
    6: null
  },
  1: {
    1: null,
    4: null,
    7: null
  },
  2: {
    2: null,
    5: null,
    8: null
  }
};

TTTAPP.diagonals = {
  0: {
    0: null,
    4: null,
    8: null
  },
  1: {
    2: null,
    5: null,
    6: null
  }
};

TTTAPP.playPlayerMove = function () {
  var thisPiece = $(this),
      spaceNum = $(thisPiece).data('square');
  console.log(thisPiece);
  console.log(spaceNum);
  TTTAPP.getSpaceInfo(spaceNum);
  TTTAPP.setSpace(thisPiece, "player");

  TTTAPP.updateGameData(spaceNum, "player");

  TTTAPP.isWinner(pieceNum);
};

TTTAPP.playComputerMove = function() {

};

TTTAPP.getSpaceInfo = function (spaceNum) {
  TTTAPP.currentMove.row = Math.floor(spaceNum/3),
  TTTAPP.currentMove.column = spaceNum % 3,
  TTTAPP.currentMove.diagonal0 = (((spaceNum%2) === 0 && (spaceNum%4) !== 0) ||
                                 spaceNum === 4),
  TTTAPP.currentMove.diagonal1 = ((spaceNum%4) === 0);
};

TTTAPP.setSpace = function (thisPiece, player) {
  $(thisPiece).text(TTTAPP[player]);
  $(thisPiece).unbind('click');
};

TTAPP.updateGameData = function (pieceNum, player) {
  var playerPiece = TTTAPP[player];

  TTTAPP.movesPlayed++;
  TTAPP.rows[TTTAPP.currentMove.row][pieceNum] = playerPiece;
  TTAPP.columns[TTTAPP.currentMove.column][pieceNum] = playerPiece;

  if (TTTAPP.currentMove.diagonal0) {
    TTTAPP.diagonals[0][pieceNum] = playerPiece;
  }

  if (TTTAPP.currentMove.diagonal1) {
    TTTAPP.diagonals[1][pieceNum] = playerPiece;
  }
};

TTTAPP.isOnePlayAway = function(pieceNum) {
  //Determine if either player is one play away.
  //If so, move there.


};

TTTAPP.isWinner = function (pieceNum) {
  // Ends game if there's a winner
  var rowTotal = 0,
      columnTotal = 0,
      diagonal0Total = 0,
      diagonal1Total = 0;

  //Check the row
  for(var space in row){

  }

};

TTTAPP.nextMove = function () {

};

TTTAPP.endGame = function () {

};

TTTAPP.resetGame = function () {
  // Change DOM and re-add click events

  console.log(this.movesPlayed);
  TTTAPP.movesPlayed = 0;
  $('div.square').innerText("");
  $('div.square').click(TTTAPP.playMove);
};