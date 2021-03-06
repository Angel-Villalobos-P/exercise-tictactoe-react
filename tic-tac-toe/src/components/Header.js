import React, { useState, useEffect } from "react";

const Header = (props) => {

    const [playerX, setPlayerX] = useState('');
    const [playerO, setPlayerO] = useState('');
    const [turn, setTurn] = useState('');

    const clickHandle = (props, turnButton) => {
        if (playerX === '' || playerO === '') {
            alert('Please type your names');
            return;
        }
        setTurn(turnButton);
        props.updatePlayers(turnButton, playerX, playerO);
    }

    useEffect(() => {
        console.log("player1: ", playerX);
        console.log("player2: ", props);
    })

    return (
        <div className="header">
            <div className="row" style={{ background: "#1a181b" }} >
                <div className="col text-center">
                    <h1 style={{ color: "white" }}>Tic Tac Toe</h1>
                    <h3 style={{ color: "white" }}>Pick a weapon!</h3>
                </div>
            </div>
            <div className="row justify-content-center" style={{ background: "#1a181b" }}>
                <div className="col-3 d-flex p-2">
                    <input type="text" className="form-control" placeholder="Player 1" onChange={e => setPlayerX(e.target.value)} ></input>
                </div>
                <div className="col-3 d-flex p-2">
                    <input type="text" className="form-control" placeholder="Player 2" onChange={e => setPlayerO(e.target.value)}></input>
                </div>
                <div className="w-100"></div>
                <div className="col-3 d-flex p-2 justify-content-center">
                    <button type="button" className="btn btn-dark" style={{ width: "80px", height: "80px", fontSize: "40px", color: "#87f1ff" }}
                        onClick={() => clickHandle(props, 'x')}>X</button>
                </div>
                <div className="col-3 d-flex p-2 justify-content-center">
                    <button type="button" className="btn btn-dark" style={{ width: "80px", height: "80px", fontSize: "40px", color: "#9984d4" }}
                        onClick={() => clickHandle(props, 'o')}>O</button>
                </div>
            </div>
        </div>

    );
}

export default Header;