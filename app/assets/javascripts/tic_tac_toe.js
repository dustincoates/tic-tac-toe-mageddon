$(function() {

});

playerMovesFirst = {
  0: ,
  1: ,
  2: ,
  3: ,
  4: ,
  5: ,
  6: ,
  7: ,
  8:
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