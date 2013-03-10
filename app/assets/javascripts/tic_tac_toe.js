$(function() {
  $('div.square').click(TTTAPP.playPlayerMove);
});

TTTAPP = {};
TTTAPP.player = 1;
TTTAPP.computer = -1;
TTTAPP.currentPlayer = "player";
TTTAPP.currentMove = {
  row: null,
  column: null,
  diagonal0: null,
  diagonal1: null
};
TTTAPP.movesPlayed = 0;

// TTTAPP.rows = {
//   0: {
//     total: 0,
//     0: null,
//     1: null,
//     2: null
//   },
//   1: {
//     total: 0,
//     3: null,
//     4: null,
//     5: null
//   },
//   2: {
//     total: 0,
//     6: null,
//     7: null,
//     8: null
//   }
// };

// TTTAPP.columns = {
//   0: {
//     total: 0,
//     0: null,
//     3: null,
//     6: null
//   },
//   1: {
//     total: 0,
//     1: null,
//     4: null,
//     7: null
//   },
//   2: {
//     total: 0,
//     2: null,
//     5: null,
//     8: null
//   }
// };

// TTTAPP.diagonals = {
//   0: {
//     total: 0,
//     0: null,
//     4: null,
//     8: null
//   },
//   1: {
//     total: 0,
//     2: null,
//     5: null,
//     6: null
//   }
// };

// TTTAPP.playPlayerMove = function () {
//   var thisPiece = $(this),
//       spaceNum = $(thisPiece).data('square');
//   console.log(thisPiece);
//   console.log(spaceNum);
//   TTTAPP.getSpaceInfo(spaceNum);
//   TTTAPP.setSpace(thisPiece, "player");

//   TTTAPP.updateGameData(spaceNum, "player");

//   TTTAPP.determineWinner(spaceNum);
// };

// TTTAPP.playComputerMove = function() {
//   TTTAPP.isOnePlayAway();
// };

// TTTAPP.getSpaceInfo = function (spaceNum) {
//   TTTAPP.currentMove.row = Math.floor(spaceNum/3),
//   TTTAPP.currentMove.column = spaceNum % 3,
//   TTTAPP.currentMove.diagonal0 = (((spaceNum%2) === 0 && (spaceNum%4) !== 0) ||
//                                  spaceNum === 4),
//   TTTAPP.currentMove.diagonal1 = ((spaceNum%4) === 0);
// };

// TTTAPP.setSpace = function (thisPiece, player) {
//   $(thisPiece).text(TTTAPP[player]);
//   $(thisPiece).unbind('click');
// };

// TTTAPP.updateGameData = function (pieceNum, player) {
//   var playerPiece = TTTAPP[player];

//   TTTAPP.movesPlayed++;

//   TTTAPP.rows[TTTAPP.currentMove.row][pieceNum] = playerPiece;
//   TTTAPP.columns[TTTAPP.currentMove.column][pieceNum] = playerPiece;

//   if (TTTAPP.currentMove.diagonal0) {
//     TTTAPP.diagonals[0][pieceNum] = playerPiece;
//   }

//   if (TTTAPP.currentMove.diagonal1) {
//     TTTAPP.diagonals[1][pieceNum] = playerPiece;
//   }
// };

// TTTAPP.isOnePlayAway = function(pieceNum) {
//   //Determine if either player is one play away.
//   //If so, move there.
//   var rowTotal = 0,
//       columnTotal = 0,
//       diagonal0Total = 0,
//       diagonal1Total = 0,
//       currentRow = TTTAPP.rows[TTTAPP.currentMove.row],
//       currentColumn = TTTAPP.columns[TTTAPP.currentMove.column];

//   //Check the row
//   for(var space in currentRow){
//     console.log(currentRow[space]);
//   }

//   //Check the column
//   for(var space in currentColumn){
//     console.log(currentColumn[space]);
//   }

// };

// TTTAPP.isWinner = function (pieceNum) {
//   // Ends game if there's a winner


// };

// TTTAPP.swapTurns = function () {

// };

// TTTAPP.endGame = function () {

// };

// TTTAPP.resetGame = function () {
//   // Change DOM and re-add click events

//   console.log(this.movesPlayed);
//   TTTAPP.movesPlayed = 0;
//   $('div.square').innerText("");
//   $('div.square').click(TTTAPP.playMove);
// };



playerMovesFirst = {
  0: {
      move: 4,
      4: {
          1: {
              move: 2,
              2: {
                  3: {
                      move: {win: 6}
                  },
                  5: {
                      move: {win: 6}
                  },
                  6: {
                      move: 3,
                      3: {
                          5: {
                              move: {win: 8}
                          },
                          7: {
                              move: {win: 8}
                          },
                          8: {
                              move: {win: 7}
                          }
                      }
                  },
                  7: {
                      move: {win: 6}
                  },
                  8: {
                      move: {win: 6}
                  }
              }
          },
          2: {
              move: 1,
              1: {
                  3: {
                      move: {win: 7}
                  },
                  5: {
                      move: {win: 7}
                  },
                  6: {
                      move: {win: 7}
                  },
                  7: {
                      move: 3,
                      3: {
                          5: {
                              move: {win: 6}
                          },
                          6: {
                              move: {draw: 6}
                          },
                          8: {
                              move: {win: 6}
                          }
                      }
                  },
                  8: {
                      move: {win: 7}
                  }
              }
          },
          3: {
              move: 6,
              6: {
                  1: {
                      move: {win: 2}
                  },
                  2: {
                      move: 1,
                      1: {
                        5: {
                            move: {draw: 8}
                        },
                        7: {
                            move: {draw: 8}
                        },
                        8: {
                            move: {draw: 7}
                        }
                      }
                  },
                  5: {
                      move: {win: 2}
                  },
                  7: {
                      move: {win: 2}
                  },
                  8: {
                      move: {win: 2}
                  }
              }
          },
          5: {
              move: 8,
              8: {
                1: {
                    move: 2,
                    2: {
                        3: {
                            move: {win: 6}
                        },
                        6: {
                            move: {draw: 3}
                        },
                        7: {
                            move: {draw: 6}
                        }
                    }
                },
                2: {
                    move: 1,
                    1: {
                        3: {
                            move: {win: 7}
                        },
                        6: {
                            move: {draw: 3}
                        },
                        7: {
                            move: {win: 7}
                        }
                    }
                },
                3: {
                    move: 6,
                    6: { //0, 4, 5, 8, 3, 6, __
                      1: {
                          move: {win: 2}
                      },
                      2: {
                          move: {draw: 1}
                      },
                      7: {
                          move: {win: 2}
                      }
                    }
                },
                6: {
                    move: 3,
                    3: { //0, 4, 5, 8, 6, 3, __
                      1: {},
                      2: {},
                      7: {}
                    }
                },
                7: {
                    move: 6,
                    6: { //0, 4, 5, 8, 7, 6, __
                      1: {},
                      2: {},
                      3: {}
                    }
                }
              }
          },
          6: {
              move: 3,
              3: { //0, 4, 6, 3, __
                1: {},
                2: {},
                5: {},
                7: {},
                8: {}
              }
          },
          7: {
              move: 8,
              8: { //0, 4, 7, 8, __
                1: {},
                2: {},
                3: {},
                5: {},
                6: {}
              }
          },
          8: {
              move: 7,
              7: { //0, 4, 7, 8, __
                1: {},
                2: {},
                3: {},
                5: {},
                6: {}
              }
          }
      }
  },
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {}
};

computerMovesFirst = {
  0: {
      1: {
          move: 3,
          3: {
              2: {
                  move: {win: 6}
              },
              4: {
                  move: {win: 6}
              },
              5: {
                  move: {win: 6}
              },
              6: {
                  move: 4,
                  4: {
                      2: {
                          move: {win: 5}
                      },
                      5: {
                          move: {win: 8}
                      },
                      7: {
                          move: {win: 5}
                      },
                      8: {
                          move: {win: 8}
                      }
                  }
              },
              7: {
                  move: {win: 6}
              },
              8: {
                  move: {win: 6}
              }
            }
      },
      2: {
          move: 3,
          3: {
              1: {
                  move: {win: 6}
              },
              4: {
                  move: {win: 6}
              },
              5: {
                  move: {win: 6}
              },
              6: {
                  move: 4
                  4: {
                      2: {
                          move: {win: 5}
                      },
                      5: {
                          move: {win: 8}
                      },
                      7: {
                          move: {win: 5}
                      },
                      8: {
                          move: {win: 5}
                      }
                  }
              },
              7: {
                  move: {win: 6}
              },
              8: {
                  move: {win: 6}
              }
          }
      },
      3: {
          move: 1,
          1: {
              2: {
                  move: 4,
                  4: {
                      5: {
                          move: {win: 7}
                      },
                      6: {
                          move: {win: 7}
                      },
                      7: {
                          move: {win: 8}
                      },
                      8: {
                          move: {win: 7}
                      }
                  }
              },
              4: {
                  move: {win: 2}
              },
              5: {
                  move: {win: 2}
              },
              6: {
                  move: {win: 2}
              },
              7: {
                  move: {win: 2}
              },
              8: {
                  move: {win: 2}
              }
          }
      },
      4: {
          move: 1,
          1: {
              2: {
                  move: 6,
                  6: {
                      3: {
                          move: 5,
                          5: {
                              7: {
                                  move: {draw: 8}
                              },
                              8: {
                                  move: {draw: 7}
                              }
                          }
                      },
                      5: {
                          move: {win: 3}
                      },
                      7: {
                          move: {win: 3}
                      },
                      8: {
                          move: {win: 3}
                      }
                  }
              },
              3: {
                  move: {win: 2}
              },
              5: {
                  move: {win: 2}
              },
              6: {
                  move: {win: 2}
              },
              7: {
                  move: {win: 2}
              },
              8: {
                  move: {win: 2}
              }
          }
      },
      5: {
          move: 4,
          4: {
              1: {
                  move: {win: 8}
              },
              2: {
                  move: {win: 8}
              },
              3: {
                  move: {win: 8}
              },
              6: {
                  move: {win: 8}
              },
              7: {
                  move: {win: 8}
              },
              8: {
                  move: 2,
                  2: {
                      1: {
                          move: {win: 6}
                      },
                      3: {
                          move: {win: 1}
                      },
                      6: {
                          move: {win: 1}
                      },
                      7: {
                          move: {win: 1}
                      },
                      8: {
                          move: {win: 1}
                      }
                  }
              }
          }
      },
      6: {
          move: 1,
          1: {
              2: {
                  move: 4,
                  4: {
                      3: {
                          move: {win: 7}
                      },
                      5: {
                          move: {win: 7}
                      },
                      7: {
                          move: {win: 8}
                      },
                      8: {
                          move: {win: 7}
                      }
                  }
              },
              3: {
                  move: {win: 2}
              },
              4: {
                  move: {win: 2}
              },
              5: {
                  move: {win: 2}
              },
              7: {
                  move: {win: 2}
              },
              8: {
                  move: {win: 2}
              }
          }
      },
      7: {
          move: 2,
          2: {
              1: {
                  move: 4,
                  4: {
                      3: {
                          move: {win: 6}
                      },
                      5: {
                          move: {win: 6}
                      },
                      6: {
                          move: {win: 8}
                      },
                      8: {
                          move: {win: 6}
                      }
                  }
              },
              3: {
                  move: {win: 1}
              },
              4: {
                  move: {win: 1}
              },
              5: {
                  move: {win: 1}
              },
              6: {
                  move: {win: 1}
              },
              8: {
                  move: {win: 1}
              }
          }
      },
      8: {
          move: 2,
          2: {
              1: {
                  move: 6,
                  6: {
                      3: {
                          move: {win: 4}
                      },
                      4: {
                          move: {win: 3}
                      },
                      5: {
                          move: {win: 3}
                      },
                      7: {
                          move: {win: 3}
                      },
                  }
              },
              3: {
                  move: {win: 1}
              },
              4: {
                  move: {win: 1}
              },
              5: {
                  move: {win: 1}
              },
              6: {
                  move: {win: 1}
              },
              7: {
                  move: {win: 1}
              }
          }
      }},
};

//if move, do x, then return