$(function() {
  $('div.square').click(TTTAPP.setUpBoard);
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
TTTAPP.movesPlayed = [];

TTTAPP.playPlayerMove = function (space) {
  var thisSpace = typeof(space) === "number" ? $('div.square[data-square="' + space + '"]') : $(this),
      spaceNum = $(thisSpace).attr('data-square');

  TTTAPP.setSpace(thisSpace, "player");

  // We temporarily disable game-play for the player.
  $('div.square').unbind('click');

  TTTAPP.updateGameData(spaceNum);

  // TTTAPP.determineWinner(spaceNum);

  TTTAPP.playComputerMove();
};

TTTAPP.playComputerMove = function() {
  var movesPlayedNum = TTTAPP.movesPlayed.length;

  // TODO: Determine which move to make next
};

TTTAPP.setSpace = function (thisSpace, player) {
  $(thisSpace).addClass(player).addClass("played");
  $(thisSpace).unbind('click');
};

TTTAPP.resetGame = function () {
  // Change DOM and re-add click events
  TTTAPP.movesPlayed = [];
  $('div.square.played').removeClass('played');
  $('div.square.player').removeClass('player');
  $('div.square.computer').removeClass('computer');

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
  default: TTTAPP.playPlayerMove(firstMoveNum); return;
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
              7: {
                  move: {win: 1}
              }
          }
      }}
};


TTTAPP.updateGameData = function (spaceNum) {
  TTTAPP.movesPlayed.push(spaceNum);
};

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

// TTTAPP.endGame = function () {

// };

//if move, do x, then return