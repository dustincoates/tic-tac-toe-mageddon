$(function() {
  $('div.square').click(TTTAPP.setUpBoard);
});

TTTAPP = {};
TTTAPP.movesPlayed = [];

TTTAPP.playPlayerMove = function (space) {
  var thisSpace = typeof(space) === "number" ? $('div.square[data-square="' + space + '"]') : $(this),
      spaceNum = $(thisSpace).attr('data-square');

  TTTAPP.setSpace(thisSpace, "player");

  // We temporarily disable game-play for the player.
  $('div.square').unbind('click');

  TTTAPP.updateGameData(spaceNum);

  TTTAPP.playComputerMove();
};

TTTAPP.playComputerMove = function() {
  var movesPlayedNum = TTTAPP.movesPlayed.length,
      movesHolder = TTTAPP.movesObject;

  // TODO: Determine which move to make next
  for (var i = 0; i < movesPlayedNum; i++) {
    movesHolder = movesHolder[TTTAPP.movesPlayed[i]];
  }

  if (typeof(movesHolder.move) === "number") {
    TTTAPP.setSpace($('div.square[data-square="' + movesHolder.move + '"]'),"computer");
    TTTAPP.updateGameData(movesHolder.move);
  }
  else if(movesHolder.move.win > -1){
    TTTAPP.setSpace($('div.square[data-square="' + movesHolder.move.win + '"]'),"computer");
    TTTAPP.winGame();
    $('div#computer-win').click(TTTAPP.resetGame);
    return;
  }
  else if(movesHolder.move.draw > -1){
    TTTAPP.setSpace($('div.square[data-square="' + movesHolder.move.draw + '"]'),"computer");
    TTTAPP.drawGame();
    $('div#draw').click(TTTAPP.resetGame);
    return;
  }
  else {
    throw("Something went wrong with the moveHolder object.");
  }

  // Let the player play again.
  $('div.square:not(.played)').on('click', TTTAPP.playPlayerMove);
};

TTTAPP.setSpace = function (thisSpace, player) {
  $(thisSpace).addClass(player).addClass("played");
  $(thisSpace).unbind('click');
};

TTTAPP.winGame = function () {
  var oldScore = +$('span#computer-score').text();
  $('span#computer-score').text(oldScore + 1);
  $('div#computer-win').removeClass('hidden');
};

TTTAPP.drawGame = function () {
  $('div#draw').removeClass('hidden');
};

TTTAPP.resetGame = function () {
  $('div.announcement').addClass('hidden');

  var spaces = {};
  TTTAPP.movesPlayed = [];

  // Change DOM and re-add click events
  $('div.square.played').removeClass('played');
  $('div.square.player').removeClass('player');
  $('div.square.computer').removeClass('computer');

  // Renumber the board. We're using IDs because we reset the data attribute.
  // We start off with "box..." because IDs cannot start with numbers.
  // If we don't do this, we run into issues on next play.

  // Set up spaces hash (cache DOM lookups)
  for (i = 0; i < 9; i++){
    spaces[i] = $('div#box' + i);
  }
  // Remap the board
  for (i = 0; i < 9; i++){
    $(spaces[i]).attr('data-square', i);
  }

  $('div.square').unbind();
  $('div.square').click(TTTAPP.setUpBoard);
};

// If player moves first and chooses something other than 0, 1, or 4, then we
// "rotate" the board (i.e. renumber each space)
TTTAPP.setUpBoard = function () {
  var firstMove = $(this),
      firstMoveNum = $(firstMove).data('square'),
      newOrder = [],
      spaces = {};

  // Don't want to rotate the board anymore.
  // And this is easier than doing "is this the first move?"
  $('div.square').unbind();
  $('div.square').on('click', TTTAPP.playPlayerMove);

  switch(firstMoveNum){
  case 2:
  case 5:
    newOrder = [6, 3, 0, 7, 4, 1, 8, 5, 2];
    break;
  case 3:
  case 6:
    newOrder = [2, 5, 8, 1, 4, 7, 0, 3, 6];
    break;
  case 7:
  case 8:
    newOrder = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    break;
  case 0:
  case 1:
  case 4:
    TTTAPP.playPlayerMove(firstMoveNum);
    return;
  }

  // Set up spaces hash (cache DOM lookups)
  for (i = 0; i < 9; i++){
    spaces[i] = $('div.square[data-square="' + i + '"]');
  }

  // Remap the board
  for (i = 0; i < 9; i++){
    $(spaces[i]).attr('data-square', newOrder[i]);
  }

  // Reset which piece the player played.
  firstMoveNum = newOrder[firstMoveNum];
  TTTAPP.playPlayerMove(firstMoveNum);
};

TTTAPP.updateGameData = function (spaceNum) {
  TTTAPP.movesPlayed.push(parseInt(spaceNum,10));
};

TTTAPP.movesObject = {
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
                              move: {draw: 8}
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
                      1: {
                          move: {draw: 2}
                      },
                      2: {
                          move: {draw: 1}
                      },
                      7: {
                          move: {draw: 2}
                      }
                    }
                },
                7: {
                    move: 6,
                    6: { //0, 4, 5, 8, 7, 6, __
                      1: {
                          move: {win: 2}
                      },
                      2: {
                          move: {draw: 1}
                      },
                      3: {
                          move: {win: 2}
                      }
                    }
                }
              }
          },
          6: {
              move: 3,
              3: { //0, 4, 6, 3, __
                1: { //0, 4, 6, 3, 1,  __
                    move: {win: 5}
                },
                2: {
                    move: {win: 5}
                },
                5: {
                    move: 1,
                    1: {
                        2: {
                            move: {win: 7}
                        },
                        7: {
                            move: {draw: 8}
                        },
                        8: {
                            move: {win: 7}
                        }
                    }
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
              move: 8,
              8: { //0, 4, 7, 8, __
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
                            move: {draw: 5}
                        }
                    }
                },
                2: {
                    move: 1,
                    1: {
                        3: {
                            move: {draw: 6}
                        },
                        5: {
                            move: {draw: 6}
                        },
                        6: {
                            move: {draw: 3}
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
                            move: {draw: 1}
                        },
                        5: {
                            move: {win: 2}
                        }
                    }
                },
                5: {
                    move: 2,
                    2: {
                        1: {
                            move: {win: 6}
                        },
                        3: {
                            move: {win: 6}
                        },
                        6: {
                            move: {draw: 3}
                        }
                    }
                },
                6: {
                    move: 3,
                    3: {
                        1: {
                            move: {win: 5}
                        },
                        2: {
                            move: {win: 5}
                        },
                        5: {
                            move: {draw: 2}
                        }
                    }
                }
              }
          },
          8: {
              move: 7,
              7: { //0, 4, 8, 7, __
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
                            move: {draw: 3}
                        }
                    }
                },
                2: {
                    move: {win: 1}
                },
                3: {
                    move: {win: 1}
                },
                5: {
                    move: {win: 1}
                },
                6: {
                    move: {win: 1}
                }
              }
          }
      }
  },
  1: {
    move: 4,
    4: { // 1, 4, __
        0: {
            move: 2,
            2: { // 1, 4, 0, 2, __
                3: {
                    move: {win: 6}
                },
                5: {
                    move: {win: 6}
                },
                6: { //!!!!
                    move: 3,
                    3: {
                        5: {
                            move: {draw: 7}
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
        2: {
            move: 0,
            0: {// 1, 4, 2, 0, __
                3: {
                    move: {win: 8}
                },
                5: {
                    move: {win: 8}
                },
                6: {
                    move: {win: 8}
                },
                7: {
                    move: {win: 8}
                },
                8: {
                    move: 5,
                    5: {
                        3: {
                            move: {draw: 7}
                        },
                        6: {
                            move: {win: 3}
                        },
                        7: {
                            move: {win: 3}
                        }
                    }
                }
            }
        },
        3: {
            move: 0,
            0: {// 1, 4, 3, 0, __
                2: {
                    move: {win: 8}
                },
                5: {
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
                        5: {
                            move: {win: 6}
                        },
                        6: {
                            move: {draw: 7}
                        },
                        7: {
                            move: {win: 6}
                        }
                    }
                }
            }
        },
        5: {
            move: 2,
            2: {// 1, 4, 5, 2, __
                0: {
                    move: {win: 6}
                },
                3: {
                    move: {win: 6}
                },
                6: {
                    move: 0,
                    0: {
                        3: {
                            move: {win: 8}
                        },
                        7: {
                            move: {win: 8}
                        },
                        8: {
                            move: {draw: 7}
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
        6: {
            move: 2,
            2: {// 1, 4, 6, 2, __
                0: {
                    move: 3,
                    3: {
                        5: {
                            move: {draw: 7}
                        },
                        7: {
                            move: {win: 5}
                        },
                        8: {
                            move: {win: 5}
                        }
                    }
                },
                3: {
                    move: 0,
                    0: {
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
                5: {
                    move: 8,
                    8: {
                        0: {
                            move: {draw: 3}
                        },
                        3: {
                            move: {win: 0}
                        },
                        7: {
                            move: {win: 0}
                        }
                    }
                },
                7: {
                    move: 8,
                    8: {
                        0: {
                            move: {win: 5}
                        },
                        3: {
                            move: {win: 5}
                        },
                        5: {
                            move: {win: 0}
                        }
                    }
                },
                8: {
                    move: 7,
                    7: {
                        0: {
                            move: {draw: 3}
                        },
                        3: {
                            move: {draw: 0}
                        },
                        5: {
                            move: {draw: 3}
                        }
                    }
                }
            }
        },
        7: {
            move: 5,
            5: {// 1, 4, 7, 5, __
                0: {
                    move: {win: 3}
                },
                2: {
                    move: {win: 3}
                },
                3: {
                    move: 8,
                    8: {
                        0: {
                            move: {win: 2}
                        },
                        2: {
                            move: {win: 0}
                        },
                        6: {
                            move: {win: 2}
                        }
                    }

                },
                6: {
                    move: {win: 3}
                },
                8: {
                    move: {win: 3}
                }
            }
        },
        8: {
            move: 0,
            0: { // 1, 4, 8, 0, __
                2: {
                    move: 5,
                    5: {
                        3: {
                            move: {draw: 7}
                        },
                        6: {
                            move: {win: 3}
                        },
                        7: {
                            move: {win: 3}
                        }
                    }
                },
                3: {
                    move: 6,
                    6: {
                        2: {
                            move: {draw: 5}
                        },
                        5: {
                            move: {win: 2}
                        },
                        7: {
                            move: {win: 2}
                        }
                    }
                },
                5: {
                    move: 2,
                    2: {
                        3: {
                            move: {win: 6}
                        },
                        6: {
                            move: {draw: 7}
                        },
                        7: {
                            move: {win: 6}
                        }
                    }
                },
                6: {
                    move: 7,
                    7: {
                        2: {
                            move: {draw: 5}
                        },
                        3: {
                            move: {draw: 5}
                        },
                        5: {
                            move: {draw: 2}
                        }
                    }
                },
                7: {
                    move: 6,
                    6: {
                        2: {
                            move: {win: 3}
                        },
                        3: {
                            move: {win: 2}
                        },
                        5: {
                            move: {win: 3}
                        }
                    }
                }
            }
        }
    }
  },
  4: {
      move: 0,
      0: { // 4, 0, __
          1: {
              move: 7,
              7: { // 4, 0, 1, 7, __
                  2: {
                      move: 6,
                      6: {
                          3: {
                              move: {win: 8}
                          },
                          5: {
                              move: {win: 8}
                          },
                          8: {
                              move: {win: 3}
                          }
                      }
                  },
                  3: {
                      move: 5,
                      5: {
                          2: {
                              move: {draw: 6}
                          },
                          6: {
                              move: {draw: 2}
                          },
                          8: {
                              move: {draw: 6}
                          }
                      }
                  },
                  5: {
                      move: 3,
                      3: {
                          2: {
                              move: {win: 6}
                          },
                          6: {
                              move: {draw: 2}
                          },
                          8: {
                              move: {win: 6}
                          }
                      }
                  },
                  6: {
                      move: 2,
                      2: {
                          3: {
                              move: {draw: 5}
                          },
                          5: {
                              move: {draw: 3}
                          },
                          8: {
                              move: {draw: 5}
                          }
                      }
                  },
                  8: {
                      move: 6,
                      6: {
                          2: {
                              move: {win: 3}
                          },
                          3: {
                              move: {draw: 5}
                          },
                          5: {
                              move: {win: 3}
                          }
                      }
                  }
              }
          },
          2: { // 4, 0, 2
              move: 6,
              6: { // 4, 0, 2, 6
                  1: {
                      move: {win: 3}
                  },
                  3: {
                      move: 5,
                      5: {
                          1: {
                              move: {draw: 7}
                          },
                          7: {
                              move: {draw: 1}
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
          3: { // 4, 0, 3
              move: 5,
              5: {
                  1: {
                      move: 7,
                      7: {
                          2: {
                              move: {draw: 6}
                          },
                          6: {
                              move: {draw: 2}
                          },
                          8: {
                              move: {draw: 2}
                          }
                      }
                  },
                  2: {
                      move: 6,
                      6: {
                          1: {
                              move: {draw: 7}
                          },
                          7: {
                              move: {draw: 1}
                          },
                          8: {
                              move: {draw: 7}
                          }
                      }
                  },
                  6: {
                      move: 2,
                      2: {
                          1: {
                              move: {win: 8}
                          },
                          7: {
                              move: {win: 8}
                          },
                          8: {
                              move: {win: 2}
                          }
                      }
                  },
                  7: {
                      move: 1,
                      1: {
                          2: {
                              move: {draw: 6}
                          },
                          6: {
                              move: {win: 2}
                          },
                          8: {
                              move: {win: 2}
                          }
                      }
                  },
                  8: {
                      move: 2,
                      2: {
                          1: {
                              move: {draw: 7}
                          },
                          6: {
                              move: {win: 1}
                          },
                          7: {
                              move: {win: 1}
                          }
                      }
                  }
              }
          },
          5: { // 4, 0, 5
              move: 3,
              3: {
                  1: {
                      move: {win: 6}
                  },
                  2: {
                      move: {win: 6}
                  },
                  6: {
                      move: 2,
                      2: {
                          1: {
                              move: {draw: 7}
                          },
                          7: {
                              move: {win: 1}
                          },
                          8: {
                              move: {win: 1}
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
          6: { // 4, 0, 6
              move: 2,
              2: {
                  1: {
                      move: 7,
                      7: {
                          3: {
                              move: {draw: 5}
                          },
                          5: {
                              move: {draw: 3}
                          },
                          8: {
                              move: {draw: 5}
                          }
                      }
                  },
                  3: {
                      move: {win: 1}
                  },
                  5: {
                      move: {win: 1}
                  },
                  7: {
                      move: {win: 1}
                  },
                  8: {
                      move: {win: 1}
                  }
              }
          },
          7: { // 4, 0, 7
              move: 1,
              1: {
                  2: {
                      move: 6,
                      6: {
                          3: {
                              move: {draw: 5}
                          },
                          5: {
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
                  8: {
                      move: {win: 2}
                  }
              }
          },
          8: {
              move: 6,
              6: {
                  1: {
                      move: {win: 3}
                  },
                  2: {
                      move: {win: 3}
                  },
                  3: {
                      move: 5,
                      5: {
                          1: {
                              move: {draw: 7}
                          },
                          2: {
                              move: {draw: 1}
                          },
                          7: {
                              move: {draw: 1}
                          }
                      }
                  },
                  5: {
                      move: {win: 3}
                  },
                  7: {
                      move: {win: 3}
                  }
              }
          }
      }
  }
};
