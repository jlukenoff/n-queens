/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //make empty board(n)
  var start = new Date();
  var emptyBoard = new Board({n: n});
  var counter = 0;
  
  
  
  //create a helper function: takes a populated board and recursive counter
  const recursiveRooks = function(board, callCount, erase) {
    //iterate through row
    for (var row = 0; row < n; row++) {
      //iterate through columns
      for (var col = 0; col < n; col++) {
        // check if position is populated, proceed with loop
        if (board.get(row)[col] !== 0) { continue; }
   
        //store prevPosition row, col
        if (erase) {
          board.togglePiece(prev[0], prev[1]);
        }
        
        var prev = [row, col];
        
        //toggle position
        board.togglePiece(row, col);
        //check if counter is equal to n to stop recursion
        if (callCount < n) {
          //recursively call helper func with board argument and counter++
          var erase = false;
          var result = recursiveRooks(board, callCount + 1, erase);
          if (result) {
            return result;
          }
        // check if valid board and return board
        } 
        // add callcount 3 check
        if (!board.hasAnyRooksConflicts() && callCount === n) {
          return board.rows();
        }
        erase = true;
      }
    }
    //decrement counter
    
    // toggle prev
    board.togglePiece(prev[0], prev[1]);
    callCount--;
  };
  // debugger;
  var erase = false;
  var solution = recursiveRooks(emptyBoard, 1, erase);

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(solution);
  var end = new Date();
  var runTime = end - start;
  console.log(runTime);
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
