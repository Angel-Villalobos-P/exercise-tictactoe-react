
import Header from './components/Header';
import './App.css';
import Square from './components/Square';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const App = () => {

    const [gameBoard, setGameBoard] = useState(
        [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ]
    );
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState('');
    const [playerX, setPlayerX] = useState('');
    const [playerO, setPlayerO] = useState('');
    const [visibleBoard, setVisibleBoard] = useState(false);
    const [moves, setMoves] = useState(0);

    const resetBoard = () => {
        setGameBoard([
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ]);
        setWinner(null);
        setTurn('');
        setPlayerX('');
        setPlayerO('');
        setMoves(0);
        setVisibleBoard(false);
    }

    useEffect(() => {
        if (winner !== null) {
            //console.log("Winner", winner);
            Swal.fire(
                'You win ' + (winner === 'x' ? playerX : playerO),
                'Congratulations!',
                'success',
            )
            resetBoard();

        }
        if (moves === 9) {
            Swal.fire(
                'No winner',
                'Start Over!',
                'Ok!',
            );
            resetBoard();
            return;
        }
    });

    const updateBoard = (loc) => {
        if (winner !== null) {
            return;
        }

        if (gameBoard[loc] === 'x' || gameBoard[loc] === 'o') {
            alert('Invalid move! \nTry again ');
            return;
        }

        let currentBoard = gameBoard;
        currentBoard.splice(loc, 1, turn);
        setGameBoard(currentBoard);

        var topRow = gameBoard[0] + gameBoard[1] + gameBoard[2];
        if (topRow.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var middleRow = gameBoard[3] + gameBoard[4] + gameBoard[5];
        if (middleRow.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var bottomRow = gameBoard[6] + gameBoard[7] + gameBoard[8];
        if (bottomRow.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var leftCol = gameBoard[0] + gameBoard[3] + gameBoard[6];
        if (leftCol.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var middleCol = gameBoard[1] + gameBoard[4] + gameBoard[7];
        if (middleCol.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var rightCol = gameBoard[2] + gameBoard[5] + gameBoard[8];
        if (rightCol.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var leftDiag = gameBoard[0] + gameBoard[4] + gameBoard[8];
        if (leftDiag.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }
        var rightDiag = gameBoard[2] + gameBoard[4] + gameBoard[6];
        if (rightDiag.match(/xxx|ooo/)) {
            setWinner(turn);
            return;
        }

        setTurn((turn === 'x') ? 'o' : 'x');
        setMoves(moves + 1);

    }

    const updatePlayers = (turn, playerX, playerO) => {
        setPlayerX(playerX);
        setPlayerO(playerO);
        setTurn(turn);
        console.log('from app ' + turn);
        setVisibleBoard(true);
    }

    if (!visibleBoard) {
        return (
            <div className="container">
                <Header playerX={playerX} playerO={playerO} updatePlayers={updatePlayers.bind(this)} />
            </div>
        );
    } else {
        return (
            <div className="container">
                <Header updatePlayers={updatePlayers.bind(this)} />
                <div className="row justify-content-center border">
                    {gameBoard.map((value, i) => {
                        return <Square key={i} loc={i} value={value} updateBoard={updateBoard.bind(this)} turn={turn} />
                    })}
                </div>
            </div>

        );
    }
}

export default App;
