import React from "react";

const Header = () => {
    return (
        <div>
            <div className="row" style={{ background: "#1a181b" }} >
                <div className="col text-center">
                    <h1 style={{ color: "white" }}>Tic Tac Toe</h1>
                    <h3 style={{ color: "white" }}>Pick a weapon!</h3>
                </div>
            </div>
            <div className="row justify-content-center" style={{ background: "#1a181b" }}>
                <div className="col-3 d-flex p-2">
                    <input type="text" className="form-control" placeholder="Player 1" ></input>
                </div>
                <div className="col-3 d-flex p-2">
                    <input type="text" className="form-control" placeholder="Player 2" ></input>
                </div>
                <div class="w-100"></div>
                <div className="col-3 d-flex p-2 justify-content-center">
                    <button type="button" className="btn btn-dark" style={{ width: "80px", height: "80px", fontSize: "40px", color: "#87f1ff" }}>X</button>
                </div>
                <div className="col-3 d-flex p-2 justify-content-center">
                    <button type="button" className="btn btn-dark" style={{ width: "80px", height: "80px", fontSize: "40px", color: "#9984d4" }}>O</button>
                </div>
            </div>
        </div>

    );
}

export default Header;