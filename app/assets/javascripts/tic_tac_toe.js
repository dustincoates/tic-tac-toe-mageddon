$(function() {

});

//space#/3 = row
//space#%3 = column
//space%2 === 0? diagonal
//space/2%2 === 0? diag0
//space/2%2 !== 0? diag1

function getSpaceInfo () {
  var row = Math.floor(spaceNum),
      column = spaceNum % 3,
      diagonal0 = !!((spaceNum/2)%2 === 0),
      diagonal1 = !((spaceNum/2)%2 !== 0);
}



rows = {
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

columns = {
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

diagonals = {
  0: {

  }
};