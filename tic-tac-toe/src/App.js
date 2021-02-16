
import Header from './components/Header';
import Table from './components/Table';
import './App.css';
import Square from './components/Square';
import { useState, useEffect } from 'react';

const App = () => {

    const [gameBoard, setGameBoard] = useState(
        [' 0', ' 1', '2 ',
            ' 3', ' 4', ' 5',
            ' 6', '7 ', '8 ']
    );
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState('x');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const numSquares = [1, 2, 3];
    const squares = numSquares.map((s) =>
        <Square />
    );

    const resetBoard = () => {
        setGameBoard([
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ]);
        setWinner(null);
        setTurn('x');
        setPlayer1('');
        setPlayer2('');
    }


    return (
        <div className="container">
            <Header />
            {/* <Table /> */}
            {squares}
        </div>

    );
}

export default App;
