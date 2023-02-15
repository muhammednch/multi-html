console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
};
init();

function render() {
    board.forEach(function(mark, index){
    console.log(mark, index);
    squares[index].textContent = mark;
});
};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
};
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    render();
    console.log(board); //checking for connection
    
};